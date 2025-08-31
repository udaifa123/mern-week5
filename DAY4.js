           //Functions
function add(a,b){
    return a+b;
}
console.log(add(5,6));
console.log(add(10,30));

       //Square Pattern
function squarePattern(n){
    for(let i=0;i<n;i++){
        console.log("*".repeat(n));
    }
}
squarePattern(4);

       //Right Triangle Pattern
function rightTriangle(n){
    for(let i=1;i<=n;i++){
        console.log("*".repeat(i));
    }
}
rightTriangle(5);

      //Pyramid Pattern
function pyramid(n){
    for(let i=1;i<=n;i++){
        let spaces=" ".repeat(n-i);
        let stars="* ".repeat(i);
        console.log(spaces+stars);
    }
}
pyramid(5);

       //function reverse triangle
function reverseTriangle(n){
    for(let i=n;i>=1;i--){
        console.log("*".repeat(i));
    }
}
reverseTriangle(4);

        //Allocation
let num=20;
let str="Hello";
let obj={name:"Udaifa"};
console.log(num);
console.log(str);
console.log(obj);

      //Deallocation
let person={name:"Udaifa"};
console.log(person.name);
person=null;

    //allocation and deallocation
let obg={value:100};
obg=null;
console.log(obg);

//
let a=50;
let b=a;
a=null;
console.log(b);

//
let obs1={value:100};
let obs2=obs1;
obs1=null;
console.log(obs2);

     //Constructors and this
function Person(name,age){
    this.name=name;
    this.age=age; 
    this.greet=function(){
        console.log(`Hi,I'm $ {this.name}and I'm ${this.age}years old.`);
    }
}
const p1=new Person("Udaifa",18);
const p2=new Person("Khadeeja",25);

p1.greet();
p2.greet();

    //The this Keyword
const obr={
    value:10,
    show(){
        console.log(this.value);
    }
};
obr.show();

//Alone global scope
console.log(this);

     //insde a constructor
function Perfume(brand){
    this.brand=brand;
}
const r1=new Perfume("hood");
console.log(r1.brand);

     //Arrow Functions Vs Normal Function(this)
const obd={
    value:200,
    normal:function(){console.log(this.value);},
    arrow:()=>{console.log(this.value);}
};
obd.normal();
obd.arrow();


//
function Animal(type){
    this.type=type;
}
const a1=new Animal("Cat");
console.log(a1.type);
const a2=new Animal("Rabbit");
console.log(a2.type);
const a3=Animal("Buffallow");
console.log(a3);

       //Generator function(function*);
function* genExample(){
    console.log("First");
    yield 1;
    console.log("Second");
    yield 2;
    console.log("Third");
    yield 3;
}
const gen=genExample();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


      //Infinte Generator Example
function*infiniteCounter(){
    let i=1;
    while(true){
        yield i++;
    }
 }
 const counter=infiniteCounter();
 console.log(counter.next().value);
 console.log(counter.next().value);
 console.log(counter.next().value);


      //Passing Values into Generator
function* greeter(){
    const name=yield "What is your name?";
    yield `Hello,${name}!`;
}
const g=greeter();
console.log(g.next().value);
console.log(g.next("Udaifa").value);

//
function* numbers(){
    yield 10;
    yield 20;
    return 30;
}
const n=numbers();
console.log(n.next());
console.log(n.next());
console.log(n.next());

     //Simple Generator
function* simpleGen(){
    yield "Hello";
    yield "world";
}
const j=simpleGen();
console.log(j.next());
console.log(j.next());
console.log(j.next());
  
      //Loop with Generator
function* count(){
    yield 1;
    yield 2;
    yield 3;
}
const c=count();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);


       //Infinite Gennerator
function* infinite(){
    let i=1;
    while(true){
        yield i++;
    }
}
const nums = infinite();
console.log(nums.next().value);
console.log(nums.next().value);
console.log(nums.next().value);

    //
function* demo(){
    yield 5;
    yield 10;
}
const d=demo();
console.log(d.next().value);
console.log(d.next().value);
console.log(d.next().value);

//
function* demo(){
    yield "A";
    yield "B";
}
let e= demo();
console.log(e.next());
console.log(e.next());
console.log(e.next());

//
function* count(){
    let i=1;
    while(i<=2){
        yield i;
        i++;
    }
}
const f=count();
console.log(f.next().value);
console.log(f.next().value);
console.log(f.next().value);

     //Currying Examples
     //Normal function
function add(a,b,c){
    return a+b+c
}
console.log(add(1,2,3));

    //curried function
function curryAdd(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(curryAdd(6)(7)(8));

      //Simple multiplication
function multiply(a){
    return function(b){
        return a*b;
    };
}
console.log(multiply(8)(5));

     //Infinite currying(handy trick)
function sum(a){
    return function(b){
        if (b!==undefined)return sum(a+b);
        return a;
    };
} 
console.log(sum(1)(2)(3)(4)(5));

    //Arrow function
const add1=a=>b=>c=>d=>a+b+c+d;
console.log(add1(2)(4)(6)(8));

//
const sub=a=>b=>a-b;
console.log(sub(20)(4));

     //Callback function
function greet(name,callback){
    console.log("Hello,"+name);
    callback();
}
function sayBye(){
    console.log("Goodbye!");
}
greet("Udaifa",sayBye);

   //SetTimeout/Async
setTimeout(()=>{
    console.log("Heyy Udaifa");
},2000);

    //custom callback
function calculate(a,b,callback){
    return callback(a,b);
}
function add(x,y){
    return x+y;
}
function multiply1(x,y){
    return x*y;
}
console.log(calculate(4,5,add));
console.log(calculate(4,5,multiply1));

//
console.log("Start");
setTimeout(()=>{
    console.log("callback executed");
},0);
console.log("End");

//
console.log(calculate(6,7,(x,y)=>x-y));

//
function test(cb){
    return cb(4,5);
}
console.log(test((a,b)=>a+b));

      //
function* demoGenerator(){
    console.log("Step 1:Start");
    yield 10;

    console.log("Step 2: continue");
    yield 20;
    
    console.log("Step 3:Done");
    yield 30;
}
const gen1=demoGenerator();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());


    //
function* counter2(){
    let i=1;
    while(i<=3){
        yield i;
    }
}
const h=counter2();
console.log(h.next().value);
console.log(h.next().value);
console.log(h.next().value);
console.log(h.next().value);


     //currying example
function add(a,b,c){
    return a+b+c;
}
console.log(add(4,5,6));

    //curried version
function curryAdd(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(curryAdd(7)(8)(9));

     //Arrow function
const xAdd=a=>b=>c=>a+b+c;
console.log(xAdd(4)(5)(6));

   //
function multiply(a){
    return function(b){
        return a*b;
    };
}
const double=multiply(2);
const triple=multiply(3);

console.log(double(5));
console.log(triple(5));

   //
const greet1=msg=>name=>`${msg},${name}!`;
const sayHello=greet1("Hello");
console.log(sayHello("Udaifa"));
console.log(sayHello("Sulthana"));

   //callback function
function greeterUser(name,callback){
    console.log("Hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}
greeterUser("Udaifa",sayGoodbye);


   // Arrow function Anonymuos Callback 
// greetUser3("Udaifa",()=>{
//     console.log("Goodbye!");
// });

      //
function calculate(a,b,callback){
    return callback(a,b);
}
console.log(calculate(6,3,(x,y)=>x-y));
console.log(calculate(6,3,(x,y)=>x/y));


