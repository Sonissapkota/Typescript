function identity<T>(arg: T): T{
    return arg;
}

let result1 = identity<string>("Hello")
let result2 = identity<number>(2)

console.log(result1);
console.log(result2)