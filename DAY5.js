         //Asynchronus javascript in practice
         //setTimeout basic async
console.log("Start");
setTimeout(()=>{
    console.log("Async task done 2s");
},1000);
console.log("End");

     //Callback(Async simulation)
function fetchData(callback){
    console.log("Fetching data...");
    setTimeout(()=>{
        callback("Here is your data!");
    },1000);
}
fetchData((result)=>{
    console.log(result);
});

     //Promises
function fetchData(){
    return new Promise((resolve)=>{
        console.log("Fetching...");
        setTimeout(()=>resolve("Data received!"),1000);
    }); 
    }
    fetchData().then((data)=>console.log(data));

    //Callback Style
function getName(callback){
    setTimeout(()=>{
        callback("Udaifa");
    },1000);
}
getName((name)=>{
    console.log("Hello",name);
});

      //Promise
let promise=new Promise((resolve)=>{
    setTimeout(()=>resolve("Data received"),1000);
});
promise.then((msg)=>console.log(msg));

       //Async/Await
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Done"),1000);
    });
}
async function showData(){
    console.log("Fetching...");
    const data=await fetchData();
    console.log(data);
}
showData();
 
        //
console.log("1");
setTimeout(()=>console.log("2"),0);
console.log("3");

       //Promise Example
let myPromise=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success){
            resolve("🎉Promise  resolved!");
        }else{
            reject("Promise rejected");
        }
    },1000);
});

      //Handling promises
myPromise
.then((result)=>{
    console.log(result);    
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log("Promise completed");
});

//using async/await
async function handlePromise(){
    try{
        const result=await myPromise;
        console.log(result);
    }catch(error){
        console.error(error);
    }finally{
        console.log("Promise completed");
    }
}
handlePromise();

        //Fetching data
function fetchData(){
return new Promise((resolve)=>{
    setTimeout(()=>resolve("Data received!"),2000);
});
}
async function getData(){
    console.log("Fetching...");
    const data=await fetchData();
    console.log(data);
}
getData();

//       //
console.log("A");
Promise.resolve("B").then((msg)=>console.log(msg));
console.log("C");

     //using fetch API(pokeAPI eg)
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then((response)=>response.json())
.then((data)=>{
    console.log("Name:",data.name);
    console.log("Height",data.height);
    console.log("weight",data.weight);
    console.log("Abilities",data.abilities.map(a=>a.ability.name));
})
.catch((error)=>{
    console.error("Error fetching data:",error);
});

      //Using Fetch API with async/await
async function getPokemon(name){
    try{
        let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let data=await response.json();
        console.log("Pokemon:",data.name);
        console.log("Base Experience:",data.base_experience);
    }catch(err){
        console.error("Error:",err);
    }
}
getPokemon("charmander");

//
fetch("https://pokeapi.co/api/v2/pokemon/bulbasar")
.then((response)=>response.json())
.then((data)=>{
    console.log("Pokemon name:",data.name);
})
.catch((error)=>{
    console.log("Error:",error);
});

//
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then((res)=>res.json())
.then((data)=>{
    console.log("Name:",data.name);
})
.catch((err)=>console.error("Error:",err));


//
async function getPokemon(){
    try{
        let res=await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
        let data=await res.json();
        console.log("Name:",data.name);
    }catch(err){
        console.error("Error:",err);
    }
}
getPokemon();

//       //Weather API
// async function getWeather(city){
//     try{
//         let response=await fetch(
//             `https://openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
//         );
//         let data=await response.json();
//         console.log(`Weather in ${data.name}:${data.main.temp}^0C,${data.weather[0].description}`);
//     }catch(err){
//         console.error("Error:",err);
//     }
// }
// getWeather("London");

         //Wether API
fetch("https://openweathermap.org/api/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric")
.then((res)=>res.json())
.then((data)=>{
    console.log("city:",data.name);
    console.log("Temperature:",data.main.temp+"^0C");
    console.log("Weather:",data.weather[0].decription);
})
.catch((err)=>console.error("Error",err));

        //async/await syntax
function wait(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function run(){
    console.log("Start");
    await wait(500);
    console.log("After 500ms");
}
run();

      //
function wait(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function demo(){
    console.log("Start");
    
    await wait(1000);
    console.log("After 1 second");

    await wait(2000);
    console.log("After 2  seconds");
}
demo();