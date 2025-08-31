     //Temporal Dead Zone
     //var vs const
console.log(a);
var a=10;

// console.log(b);
// let b=20;
     
      //TDZ inside a block
let c=20;
console.log(c);

    //const also TDZ
// console.log(x);
// const x=100;

     //Functions and TDZ
let greet=()=>console.log("Hello");
greet();

    //Exception Handling(try...catch)
try{
    let num=10/0;
    console.log(num);
    let x=y+5;
}catch (err){
    console.log("Error caaught:",err.message);
}

    //try...catch...finally
try{
    JSON.parse("invalid json");
}catch (err){
    console.log("Oops!",err.message);
}finally{
    console.log("Finally block always runs!");
}

     //Throwing custom errors
function divide(a,b){
    if(b==-0){
        throw new Error("Division by zero not allowed");
    }
    return a/b;
}
try{
    console.log(divide(10,0));
}catch(err){
    console.log("Caught:",err.message);
}

       //shadowing&and illegal shadowing
let x=10;
function test(){
    let x=20;
    console.log(x);
}
test();
console.log(x);

   //illegal shadowing when a variable let/var
var y=40;
{
    let y=50;
}
// function check(){
//     var z=60;
//     let z=70;❌
// }

         //Type Coercion
console.log("5"+2);
console.log("5"-2);
console.log(1=="1");
console.log(1==="1");

      // 1 implicit Coercion(Automatic)
//string coercion(when+with a string)
console.log("7"+7);   //(number+string)
console.log(1+"2");

//number coercion(when using-,*,/)
console.log("5"-2);
console.log("6" * "2");

//boolean coercion(in conditions)
if("")console.log("true");
else console.log("false");
if("hello")console.log("true");

      //2 Explicit Coercion(Manual)
//To Number
console.log(Number("123"));
console.log(Number("abc"));
console.log(parseInt("100px"));

//To string
console.log(String(123));
console.log((123).toString());

//To Boolean
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hi"));

     //3 Loose vs Strict Equality
//Loose equality(==)allows coercion
console.log(1=="1");
console.log(true==1);

//strict Equality(===)no corecion
console.log(1==="1");
console.log(true===1);

//1 string + Number string
console.log("6"+2);
console.log(2+"5");

//String-Number-Number
console.log("5"-2);
console.log("10"-"3");

//Boolean Number
console.log(true+1);
console.log(false+1)

//Null and undefined
console.log(null+1);
console.log(undefined+1);

//Loose vs Strict Equality
console.log(1=="1")
console.log(1==="1");
console.log(0==false);
console.log(0===false);

//Objects to primitive
console.log([1,2]+3);
console.log([]+[]);
console.log({}+{});

//Memory leak
let data=[];
setInterval(()=>{
    data.push(new Array(1000).fill("🔥"));
    console.log("Data size:",data.length);
},1000);

//2
setInterval(()=>console.log("leak!"),1000);


     //js examples for TDZ
console.log(m);
var m=5;        //undefined
// console.log(n);
// let n=10;        //error
// console.log(o);
// const o=15;      //error

//js Examples for Type Coercion
console.log("10"+5);
console.log("10"-5);
console.log(true+1);
console.log(false+1);
console.log(1=="1");
console.log(1==="1");



    