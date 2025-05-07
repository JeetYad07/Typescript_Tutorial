When using "Type Guards" (i.e., if statements that check which concrete type is being used), TypeScript performs so-called "Type Narrowing".

This means that TypeScript is able to narrow a broader type down to a more specific type.

Consider this example:

function combine(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
 
  return `${a} ${b}`;
}

In this example, inside the if statement, TypeScript narrows the types of a & b from "either a number or a string" down to "definitely a number" - because that's what the condition of the if check says (and TypeScript "understands" that).

After the if statement, TypeScript understands that a and b are again either a number or a string"  because we only make it into the if statement if both are of type number. The type therefore is broader again.

You can add all kinds of "Type Guards" to run code conditionally and get TypeScript to narrow a type:

Use JavaScript's typeof operator as shown above to check if you're dealing with a string, number, boolean, object, function, symbol or bigint type

Use JavaScript's instanceof operator to check if an object value is based on some specific class

Use JavaScript's in operator to check if an object contains a specific property

Important: You can NOT check if a value meets the definition of a custom type (type alias) or interface type. These are TypeScript-specific features for which no JavaScript equivalent exists. Therefore, since those if checks need to run at runtime, you can't write any code that would be able to check for those types at runtime.

For example, the below code won't work because the User type does not exist once the code is compiled to JavaScript:

type User = {
  name: string;
  age: number;
};
 
type Admin = {
  name: string;
  age: number;
  permissions: string[];
};
 
function login(u: User | Admin) {
  if (typeof u === User) {
    // do something
  }
}
But you could check for the existence of the permissions property since only the Admin object will have one:

function login(u: User | Admin) {
  if ('permissions' in u) {
    // do something
  }
}
That code would work at runtime.