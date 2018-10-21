'use strict';

var Constants = require('../util/Constants');
var KeyCertificate = require('./KeyCertificateGenerator');
var Jwt = require('jwt-simple');
var DigestGenerator = require('../payloadDigest/DigestGenerator');
var ApiException = require('../util/ApiException');

/* JWTSigToken return jwtToken.
*  jwtToken contains jwtBody encoded with JWT using RS256 algoritham.
*  In POST method only we need to add digest in the jwtBody
*/

exports.getToken = function (merchantConfig, logger) {

    try {
        var claim_Set = "";
        // date format is 'Mon, 09 Apr 2018 10:18:57 GMT'
        var date = new Date(Date.now()).toUTCString();
        var rsaPrivateKey = KeyCertificate.getRSAPrivateKey(merchantConfig, logger);
        var certificate = KeyCertificate.getX509CertificateInPem(merchantConfig, logger);
        var requestType = merchantConfig.getRequestType().toLowerCase();
        if (requestType === Constants.GET || requestType === Constants.DELETE) {
            claim_Set = "{\"iat\":\"" + date + "\"}";
        }
        else if (requestType === Constants.POST || requestType === Constants.PUT) {
            var digest = DigestGenerator.generateDigest(merchantConfig, logger);
            claim_Set = "{\"digest\":\""
                + digest + "\",\"digestAlgorithm\":\"SHA-256\",\"iat\":\""
                + date + "\"}";
        }
        else {
            ApiException.ApiException(Constants.INVALID_REQUEST_TYPE_METHOD, logger);
        }

        var x5CList = [certificate];
        var customHeader = {
            "header": {
                "v-c-merchant-id": merchantConfig.getKeyAlias(),
                "x5c": x5CList
            }
        };

        var claimSetObj = JSON.parse(claim_Set);
        //Generating JWToken
        var jwtToken = Jwt.encode(claimSetObj, rsaPrivateKey, 'RS256', customHeader);

        return jwtToken;

    } catch (err) {
        throw err;
    }
}