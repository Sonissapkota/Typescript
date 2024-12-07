// function identity<T>(arg: T): T{
//     return arg;
// }

// let result1 = identity<string>("Hello")
// let result2 = identity<number>(2)

// console.log(result1);
// console.log(result2)

// Using generics in array
function displayElement<T>(arr: T[]): void{
    arr.forEach((item)=>console.log(item))
}

displayElement(["Sonis", "Sajan", "Badri", "Abhinav", "Diwas"])
displayElement([1,2,3,4,5,6,7,8,9,10])