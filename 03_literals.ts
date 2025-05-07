type Role = 'admin' | 'user' | 'editor'
let role : Role

role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';

function performAction(action:string | number,role:Role){
    if(role === 'admin' && typeof action === 'string'){
        //.....
    }
}