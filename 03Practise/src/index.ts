enum LogLevel{
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
}

function logMessage(level:LogLevel, message: string): void{
    if(level === LogLevel.ERROR){
        console.error("cannot display the message");
    }else{
        console.log(message)
    }
}

logMessage(LogLevel.ERROR, "Hey what are you doing")