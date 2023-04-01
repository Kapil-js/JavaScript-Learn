// function orderPizza() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const pizza = '🍕';
//             resolve(pizza);
//         }, 2000)
//     })
// }

// const pizzaPromise = orderPizza();

// // console.log();
// pizzaPromise
//     .then((pizza) => {
//         console.log('my pizza', pizza);
//     });

// let year = '2020';

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){

//             console.log('The year ' + year + ' is  a leap year');
//         }else{
//             console.log('The year ' + year + ' is not a leap year');

//         }
//     }else{
//         console.log('The year ' + year + ' is  a leap year');
//     }
// }else{
//     console.log('The year ' + year + ' is not a leap year');
// }

// let num = 0;

// do{
//     console.log(num);
//     num++;
// }while(num <= 10);

// for(let num = 1; num <=20; num++){
//     let tableOf = 8;
//     console.log( tableOf + " * " + num + " = " + tableOf * num );
// }

// let a = new Date();

// console.log(a.toLocaleString());
// console.log(a.toLocaleTimeString
//     ());

// console.log("Hii");

// setTimeout(() =>{
//     console.log("dbgjkfhdgfjkdh");
// },2000);

// console.log("How are you");

// function myFunction() {
//     console.log("After Few seconds");
// }

// setTimeout(myFunction, 2000)

// function myFunction(name) {
//     console.log("After Few seconds", name);
// }

// setTimeout(myFunction, 2000, 'Kapil')

// function myClock () {
//     const date = new Date();
//     const hours = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     console.log(`${hours}: ${min}: ${sec}`);
// }
// const setTime = setInterval(myClock, 1000);

// setTimeout(()=>{
//     clearInterval(setTime)
// },5000)

// function someTask (callBack) {
//     console.log('Somthing Done');
//     setTimeout(() =>{
//         callBack(null, 'This is data')
//     },0)
// }

// someTask((error, data) =>{
//     if(error){
//         console.log('NOT FOUND');
//         throw error
//     }
//     else{
//         console.log(data);
//     }
// })

// let sum = function(a,b,c) {
//     return {
//         getsumto:function(){
//             return a+b;
//         },
//         getsumthree:function(){
//             return a+b+c;
//         }
//     }
// }

// let store =  sum(3,4,5);
// console.log(store.getsumthree());

// const datas = [
//     {name: 'Harsh', Profession: 'Full Stack Developer'},
//     {name: 'Naveen', Profession: 'Backend Developer'}
// ];

// function getDatas() {
//     let output = '';
//     setTimeout(() => {
//         datas.forEach((data,index)=>{
//             output+= `<li>${data.name}</li>`;
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createData (newdata){

//     return  new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             datas.push(newdata);
//             let error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("Shi nhi hai")
//             }
//         }, 1000);
//     })

// }

// createData({name: "Vivek",Profession: 'Full Stack Developer'}).then(getDatas).catch(err => console.log("Shi nhi hai"));

// async function start (){
//     await createData({name: "Vivek",Profession: 'Full Stack Developer'})
//     getDatas();
// }

// start();

// let userDeatils = {
//     name: "Ajay",
//     Age: 25,
//     Designation: "Developer",
// }

// let printDetails = function(state){
//     console.log(this.name+ " " + state);
// }
// printDetails.call(userDeatils,"Jaipur");

// let userDeatils2 = {
//     name: "Kapil",
//     Age: 32,
//     Designation: "Developer",
// }

// printDetails.call(userDeatils2,"Jaipur");

// printDetails.apply(userDeatils2,["Delhi"]);

// let newf =  printDetails.bind(userDeatils,"Delhisd");
// newf();

// const companies= [
// {name: "Google", category: "Product Based", start: 1981, end: 2004},
// {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
// {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
// {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
// {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i=0;i<=companies.length;i++){
//     console.log(companies[i]);
// }

// companies.forEach(function(company,index){
//     console.log(company.name);
// });

// companies.forEach((company,index) =>{
//     console.log(company.name);
// })

// for(let i=0;i<ages.length;i++){
//     if(ages[i]>= 20){
//         console.log(ages[i]);
//     }
// }

// const age = ages.filter(function(age){
//     if(age >= 20){
//       return true;
//     }
// });
// console.log(age);

// const age = ages.filter(age=>age >=20)
// console.log(age);

// const sb=  companies.filter(function(company){
//     if(company.category === "Service Based"){
//         return true;
//     }
// });
// console.log(sb);

// const dummy = companies.map((company,index)=>{
//    return `${company.name} ${company.category}`
// })
// console.log(dummy);

// const sorted = companies.sort((c1,c2) => (c1.start < c2.start  ? 1 :-1)

// );

// console.log(sorted);

// const age = 9;

// if(age >= 18) {
//     console.log('you can vote');

//     if(age >= 60) {
//         console.log("You can vote again");
//     }
    
// }else{
//     console.log("you cannot vote");
//     if(age < 10) {
//         console.log("School");
//     }
// }

// const marks = 80;

// if (marks > 90) {
//   console.log("A+");
// } else if (marks > 80) {
//   console.log("A");
// } else if (marks > 70) {
//   console.log("B+");
// }else if (marks > 60) {
//   console.log("B");
// }else{
//     console.log('Fail');
// }


// const marks = 39;

// const result = (marks>= 40) ? "PASSED" : "FAILED"

// console.log(result);


// const days = 'Tuesday';

// switch (days) {
//     case "monday":
//         console.log("Today monday");
//         break;
//     case "Tuesday":
//         console.log("Today Tuesday");
//         break;
//     case "wenesday":
//         console.log("Today wenesday");
//         break;
//     case "Thusday":
//         console.log("Today Thusday");
//         break;

//     default:
//         console.log("Saturday");
//         break;
// }


for(let index= 0; index <=100; index = index + 2){
    console.log("Heyyyyyy", index);
}