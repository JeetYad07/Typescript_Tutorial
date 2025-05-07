/**
 * Generic Types: are types that "Works together" with another type(simply means that a type (like "Array")) needs extra information
 * (-> e.g: the type of the values that should be stored in array)
 */

type Roles = 'admin' | 'user' | 'editor'

function performActionByUser(action:string | number, role:Roles){
    if(role === 'admin' && typeof action === 'string'){
        //...
    }
}

let userRoles : Array<Roles>;
userRoles = ['admin','editor','user']

// Build own Generic Type:
// Define Generic Type
type DataStorage<T> = {
    storage:T[];
    add:(data: T) => void;
};

// Use Generic Type
const textStorage : DataStorage<string> = {
    storage:[],
    add(data){
        this.storage.push(data)
    }
}

// const userStorage: DataStorage<User> = {
//     storage:[],
//     add(data){
//         this.storage.push(data);
//     }
// }

function merge<T,U>(a:T,b:U){
    return {
        ...a,
        ...b,
    };
}

// const newUser = merge<{name:string},{age:number}>({name:"Jeet"},{age:26}){

// }
const newUser = merge({name:"Jeet"},{age:26})

