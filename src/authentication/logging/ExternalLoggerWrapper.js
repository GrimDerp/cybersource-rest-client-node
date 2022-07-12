'use strict'

class ExternalLoggerWrapper{

    extLogger;

    constructor(externalLogger) {
        this.extLogger = externalLogger;
    }

    getExternalLogger(){
        return this.extLogger;
    }

    isLoggerEmpty(){
        if(this.extLogger === undefined)
            return false;
        return true;
    }
}

module.exports = ExternalLoggerWrapper;