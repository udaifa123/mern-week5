        //Stack overflow
// function recruse(){
//     recruse();    //keep calling itself
// }
// recruse();

      //Stack Underflow
let pizza=[];
console.log(pizza.pop());    //undefined 


       //Stack Overflow Example(Array as Stack)
let browny=[];
let maxSize=3;
function push(item){
    if(browny.length>=maxSize){
        console.log("stack overflow!cannot add:",item);
    }else{
        browny.push(item);
        console.log("Pushed:",item,"browny:",browny);
    }
}
push(10);
push(20);
push(30);
push(40); 

       //Stack Underflow Example
function pop(){
    if(browny.length===0){
        console.log("browny underflow!Nothing to remove.");
    }else{
        let item=browny.pop();
        console.log("Popped:",item,"browny",browny);
    }
}
clear=[];
pop();

       //Stack Overflow
let frenchfries=[];
let limit=3;
frenchfries.push("🍟1");
frenchfries.push("🍟2");
frenchfries.push("🍟3");
frenchfries.push("🍟4");    

      //Stack Underflow
let fruits=[];
let fruit=fruits.pop();
console.log(fruit);        //undefined

         //Object
let person={
    name:"Udaifa",
    age:18,
    greet:function(){
        console.log("Hello,my name is "+this.name);
    }
};
console.log(person.name);
person.greet();

       //Classes
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`Hi,I am ${this.name},${this.age}years old`);
    }
}
const p1=new Person("Udaifa",18);
p1.introduce();

      //object
let book={
    title:"Javascript Basics",
    pages:200,
};
console.log(book.title);
console.log(book.pages);

//
let perfumes={
    brand:"Jannathul Firduos",
    price:380,
};
console.log(perfumes.brand);
console.log(perfumes.price);

    //inheritance class extends
class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        console.log("sound...");
    }
}
class Cat extends Animal{
    makeSound(){
        console.log("Meoww!!🐱")
    }
}
const d1=new Cat("Lazzy");
d1.makeSound();

    //3
class Car{
    constructor(brand){
        this.brand=brand;
    }
    drive(){
        console.log(`Driving a ${this.brand} car...`);
    }
}
const myCar=new Car("BMW");
myCar.drive();

  //4
class Car1{
    constructor(brand){
        this.brand=brand;
    }
    drive(){
        console.log(`Driving a ${this.brand} car1..,`)
    }
}
const myCar1=new Car("Tesla");
myCar1.drive();

      //Shallow copy
let obj1={name:"udaifa",details:{age:18} };
let shallow={ ...obj1 };
shallow.details.age=20;
console.log(obj1.details.age);


      //Deep copy
let obj2={name:"udaifa",details:{age:18} };
let deep=JSON.parse(JSON.stringify(obj2));
deep.details.age=30;
console.log(obj2.details.age);

  //shallow
let arr=[1,[2,3]];
let shallow1=arr.slice();
shallow1[1][0]=99;
console.log(arr);

//4
let arr1=[1,2,[3,4]];
let shallow2=arr1.slice();
shallow2[2][0]=99;
console.log(arr1);

//Deep
let arr2=[1,2,[3,4]];
let deep1=JSON.parse(JSON.stringify(arr2));
deep1[2][0]=99;
console.log(arr2);

       //Instance
class Person1{
    constructor(name){
        this.name=name;
    }
}
const c1=new Person1("Udaifa");
console.log(c1.name);

       //prototype
function Birds(type){
    this.type=type;
}
Birds.prototype.sound=function(){
    console.log(this.type + " makes a sound");
};
const lovebirds=new Birds("lovebirds");
lovebirds.sound();

        //Instance vs Prototype
class Car2{
    constructor(brand){
        this.brand=brand;
    }
    drive(){
        console.log(this.brand+ " is driving");
    }
}
const b1=new Car2("Minicooper");
b1.drive();

     //1
class Car3{
    constructor(brand){
        this.brand=brand;
    }
    drive(){
        console.log(this.brand+ "is driving");
    }
}
const u1=new Car3("Fortuner");
console.log(u1.__proto__===Car3.prototype);

       //without memoization
function square(n){
    console.log("calculating...");
    return n*n;
}
console.log(square(4));
console.log(square(4));

      //with memoization
function memoizedSquare(){
    const cache={};
    return function(n){
        if(cache[n]){
            console.log("From cache");
            return cache[n]
        }
        console.log("Calculating...");
        cache[n]=n*n;
        return cache[n];
    };
}
const square1=memoizedSquare();
console.log(square1(5));
console.log(square1(5));

      //Class vs Object
class Person3{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hi,I'm ${this.name} and I'm ${this.age} years old`);
    }
}
const s1=new Person3("Udaifa",18);
const s2=new Person3("Sulthana",19);

s1.greet();
s2.greet();

     //Deep copy vs shallow copy
const obj4={
    name:"Udaifa",
    details:{age:18}
};
const shallow4={...obj4};
shallow4.details.age=25;
console.log(obj4.details.age);

const deep2=JSON.parse(JSON.stringify(obj4));
deep.details.age=30;

console.log(obj4.details.age);

       //Memoization Function Example
function memoizedSquare(){
    const cache={};
    return function(n){
        if(cache[n]){
            console.log("From cache");
            return cache[n]
        }
        console.log("Calculating...");
        cache[n]=n*n;
        return cache[n];
        };
}
const square5=memoizedSquare();
console.log(square(5));
console.log(square(5));
console.log(square(6));
console.log(square(6));
