"use strict";
// enum LogLevel{
//     INFO = 'info',
//     WARNING = 'warning',
//     ERROR = 'error'
// }
// function logMessage(level:LogLevel, message: string): void{
//     if(level === LogLevel.ERROR){
//         console.error("cannot display the message");
//     }else{
//         console.log(message)
//     }
// }
// logMessage(LogLevel.ERROR, "Hey what are you doing")
//Optional parameter in the TS
// function greet(name?: string): void{
//     if(!name){
//         console.log("Hello Guest");
//     }else{
//         console.log(`Hello, ${name}`)
//     }
// }
// greet("Sonis")
// greet()
//Setting up default paramater in the typescript
function greet(message, name = "sonis") {
    return `Hello ${name} here is your message = ${message}`;
}
console.log(greet("Hello how are you"));
