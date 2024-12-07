"use strict";
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "info";
    LogLevel["WARNING"] = "warning";
    LogLevel["ERROR"] = "error";
})(LogLevel || (LogLevel = {}));
function logMessage(level, message) {
    if (level === LogLevel.ERROR) {
        console.error("cannot display the message");
    }
    else {
        console.log(message);
    }
}
logMessage(LogLevel.ERROR, "Hey what are you doing");
