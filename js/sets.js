console.log("Hello Everone");

const myset = new Set();
console.log("The Set looks like :" ,myset); 

myset.add("This");
myset.add("My Name");
myset.add("My");
console.log("The Set looks like this now:" ,myset); 
console.log(myset.size); 

console.log(myset.has(""));


// console.log("Before remove", myset.has("My Name"));
// myset.delete("My Name");
// console.log("After remove", myset.has("My Nmae"));    

// for(let item of myset){
//     console.log("Item is  :", item )
// }

// myset.forEach((item)=>{
//     console.log("Item is  :", item )
  
// })
// let arr = [1,2, 3, 4, "this", "that"];
// console.log(arr);

// //Creating a set and giving it the value of arr
// let currentSet = new Set(arr);
// console.log(currentSet);

// //Now the cuurent set converted into an array
// let currentArr = Array.from(currentSet);
// console.log(currentArr);


// let a = [1,2,3,4, "Kapil"];
// console.log(a);

// let currentset = new Set(a);
// console.log(currentset);

// let currentarr = Array.from(currentset);
// console.log(currentarr);