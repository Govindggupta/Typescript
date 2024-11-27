interface hallo {
    name: string, 
    age: number
};

function SumOfAge(user1 : hallo, user2 : hallo) {
    return user1.age + user2.age;
}

console.log(SumOfAge({name:"hallo", age: 12}, {name:"hallu",age: 14}));

// PICK 
// pick let you create a type in which we you can pick particular attributes from the interface or type you  choose 
interface User89{
    name: string, 
    email: string, 
    age: number, 
    password: string, 
}

type UpdaateUser = Pick<User89, "name"| "age" >;

function UpdattinUser(user: UpdaateUser){
    //
}

// PARTIAL 
type UpdaateUserOptional = Partial<User89>;

function UpdattinUseroptionally(user: UpdaateUserOptional){
    //
};
// it make every attribute optional 

// READONLY 
// readonly allow you to not change that thing again after that code 
type HelloUser ={
    name: string, 
    readonly email: string, 
}
// Readonly<HelloUser> for using it with any thing and not have to write readonly for all attribute
const newA = [1,2,3,4 ];
newA[0] = 3

// RECORD 
// MAP
// EXCLUDE
 