/**
 * TS supports some simple types(primitives)
 * 
 * There are three main primitives in JavaScript and TypeScript.

    boolean - true or false values
    number - whole numbers and floating point values
    string - text values like "TypeScript Rocks"

* There are also 2 less common primitives used in later versions of Javascript and TypeScript.
    bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
    symbol are used to create a globally unique identifier.
 */

// let userName = "Jeet"; // string
// let userAge = 26;
// let isValid = true;

// Invoking The Typescript Compiler:
// npx tsc filename

/**
 * Type Assignment:
 * When creating a variable, TS uses two ways to assign variable:
 *  1. Explicit 
 *  2. Implicit
 */

// Explicit type:
let usernames: string = "Heer"

// Implicit:
let age = 24

// Note: Having TypeScript "guess" the type of a value is called infer.


//Error in Type Assignment:
let firstName: string = "heer" // type string
// firstName = 24 // attempt to re-assign value to different type.


/** Important to know */
// let UserID = "abc1"
// UserID = 243
// To give TS varibale to hold more than one type:

type User_ID = string | number 

let UserID: User_ID = "abc1";
UserID = 123;

// TypeScript Special Types: TypeScript has special types that may not refer to any specific type of data.
/**
 * Type: any
        any is a type that disables type checking and effectively allows all types to be used.
        The example below does not use any and will throw an error:
 */

// let u = true
// u = "username"  // 'string' is not assignable to type 'boolean'.
// Math.round(u) // Argument of type 'boolean' is not assignable to parameter of type 'number'

// Setting any to the special type any disables type checking:
let u: any = true;
u = "username"; // no error
Math.round(u)  // no error



// Object Type

// let user:object; 
// more type safe 

// custome object type
type User =  {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number
}

let user: User
user = {
    name: "Jeet",
    age: 26,
    isAdmin: true,
    id: 'abc'
}

// user = {} // but this is not valid because it is having structure of that type


/***************************************Array Type*******************************/

// let hobbies:Array<String>;
let hobbies: String[]; // number[],boolean[]

// {name:string;age:number}[]
hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1,2,3]
// console.log(hobbies)

/*******Adding Types to Function */

// function add(a:number,b:number){
//     const res =  a+b;
//     console.log(res)
// }

// return type of function
// function add(a:number,b:number):undefined{
//     const res =  a+b;
//     console.log(res)
// }

// return type of function that doesn't return anything
// function add(a:number,b:number):void{
//     const res = a + b;
//     console.log(res);
// }

// function add(a: number, b: number) {
//     const res = a + b;
//     return res;
// }

// function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
//     calcFn(a, b)
// }

// calculate(4, 5, add);

/*********** Creating Custom Types / Type Alias ********/

function add(a: number, b: number) {
    const res = a + b;
    return res;
}

// we can create a custom type of function using keyword 'type'
type AddFn =  (a: number, b: number) => number

function calculate(a: number, b: number, calcFn:AddFn ){
    calcFn(a, b)
}

calculate(4, 5, add);

// another way to define Object types
interface Creadentials {
    password:string;
    email:string
}

let creds : Creadentials;
creds = {
    password:"abc",
    email:"text@example.com"
}

/** Difference B/W type keyword vs interface */

/**
 * 1. type can be use for anything but interface is only useful for object
 *                          `You can actually use "interface" to also define function types but 
 *                           you, for example, can't use "interface" to store a union type(which you can with "type")   `
 * 
 * 2. inteface can be use in class using implements to get the property of it
 */

class AuthCredentials implements Creadentials {
    email: string;
    password: string;
    username:string
}

function login(creadentials:Creadentials){

}

login(new AuthCredentials())

/**
 * 3. interface can be easily extendable(can be use in building library which is called declaration merging)
 */

// type merging

// type Admin = {
//     permission:string[]
// }

// type AppUser = {
//     userName:string
// }

// type AppAdmin = Admin & AppUser

// let admin: AppAdmin;

// admin = {
//     permission:['login'],
//     userName:"Jeet"
// }


// Merge multiple types using interface

interface Admin {
    permission:string[]
}

interface AppUser {
    userName:string
}

interface AppAdmin extends Admin,AppUser{

}

let admin: AppAdmin;
admin = {
    permission:['login'],
    userName:'Jeet'
}