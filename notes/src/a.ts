function newfunction(vari:string) {
    console.log(`hello ${vari}`)
}


// function Sum(Num1:number , Num2:number) {
//     return Num1+Num2;
// }
// this gives return value number but we can write explicitly what to return 

// type inference (tsc auto matecially returned type of return as number)
function Sum(Num1:number , Num2:number) : number{
    return Num1+Num2;
}
const a = Sum(1,3); 
// console.log(a)

// writing explicitly what to return is preferable 
  

function isLeagal(age:number) : boolean{
    if (age> 18) {
        return true;
    }
    else{
        return false;
    }
}

let x =isLeagal(18); 
// now here we don't have to write type becoz tsc already assigned x boolean 
// but assigning value is more preferable 

// Giving type to function  OR  
// How to give type to a function passed as an argument
function runafter1S(fn: () => void) {
    setTimeout(fn, 1000);
}

// runafter1S(function() {
//     console.log("helloworld")
// })



// INTERFACE 

interface User {
    firstname : string;
    lastname: string;
    age : number;
    email? : string; // this means that it is not compulsion for user to pass this 
}

function newIsLegal(user :User) {
    if (user.age> 18) {
        return true;   
    } else {
        return false;
    }
    
}

// interface let you implements class 
class NewUser implements User{
    firstname: string;
    lastname: string;
    age: number;

    constructor(a : string , b : string , c : number){
         this.firstname = a; 
         this.lastname = b;
         this.age = c;
    }
}

// TYPES 

type User2 = {
    firstname : string;
    lastname: string;
    age : number;
    email? : string;
}

// types.1 Union 
// it lets you give union of multiple things

type StringOrNumber = number | string;

function UserIdPrint (id : StringOrNumber){
    console.log(id);
}

// UserIdPrint(1);
// UserIdPrint("newuser") 
//  both of these works 



// types.2 intersection 
// if you want to create a type that has multiple property of type/ class 
type Manager = { 
    name: string;
    company: string;
}

interface Employee {
    name: string;
    salary : number;
} 

type TeamLead = Employee & Manager;

const t : TeamLead = {
    name: "Fenil", 
    company: "falana company", 
    salary: 4999
}
// console.log(t)

// QUESTION: What is difference between type and interface ? 
// ANSWER:  where ever you need to use | or & you can use type and if you have to implement class you can user interface 
// i.m, type doesn't let to implement class whereas interface let you does that $


// ARRAYS 

function maxvalue(num : number[]){

}
// this creates the array of number to the num 

interface Pro {
    name: string;
}
 
interface Pro {
    salary : number;
}

// ENUMS 
// enums lets you create human readable enumrations which you want as input by the user 

enum Direction { 
    up, //0
    down , //1
    left , //2
    right //3
};

function newGame(keypressed: Direction) {
    if (keypressed == Direction.right) {
        //
    }
}

newGame(Direction.up);
newGame(Direction.down);
// this is how we use enums in this 

// console.log(Direction.up);
// console.log(Direction.down);
// console.log(Direction.right);
// console.log(Direction.right);
// at the end enums are nothing but numbers assigned to the values we wrote in that 

// now if you don't want number to be its value you've to give it values manuallly 
enum Hallo {
    RIGHT = "right", 
    LEFT = "left"
}

// now if you want that that nums start from 1 or any other number you can do it by assignig that number to the fist value in enum 
enum hallu {
    hey = 15, 
    hello , 
    wello , 
    kemcho
}

// GENERIC
// so generic is used to give different of types to a function , class and other things which you can google 

function Newfun<T>(a: T): T {
    return a;
}

// console.log(Newfun<string> ("hallo"));
// console.log(Newfun<number> (3));
// here this works as we've given to type as varible there 

// if you don't provide type tsc implicitly infer what to is the value of T 

function getFirstEl<T>(a: T[]) {
    return a[0];
}

let my = getFirstEl(["hello", "hey", "how"]);
my.toUpperCase();
// here i did not write type although onhovering we can see that it is returning string as tsc infered it by it's own 
getFirstEl<(string |number)>(["hello", 1, "new", 2]);
