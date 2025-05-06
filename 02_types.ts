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
let usernames : string = "Heer"

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
let UserID:string | number = "abc1";
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