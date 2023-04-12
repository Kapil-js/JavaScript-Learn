// console.log("Hello one");

// setTimeout(function(){
//     console.log("Hello Two in 2 seconds");
// }, 2000
// )
// console.log("My name is " + "Jhon");



// let promise = new Promise(function(resolve, reject){
//     alert("Hello")
//     resolve(56)
// });

// console.log(promise);   


let p = new Promise((reslove, reject)=>{
    console.log("promise is pending" );
    setTimeout(()=>{
        console.log("I am promise and I am reslove")
        // reslove(true)
        reslove("I am an reslove")
    },5000)
})

console.log(p);

let p2 = new Promise((reslove, reject)=>{
    console.log("promise is pending" );
    setTimeout(()=>{
        console.log("I am promise and I am Fullfilled")
        // reslove(true)
        reject(new Error("I am an error"))
    },5000)
})

console.log(p2);

// catch value
p.then((value) => {
    console.log(value)
})
// catch error
p2.then((error) =>{
    console.log("some error")   
})