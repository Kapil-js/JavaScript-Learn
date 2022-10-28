// alert("Do not click")


// let a = prompt("Enter the value");
// document.write(a);


let b = prompt("Enter the value");
b = Number.parseInt(b)                                                                                                      
alert("you entered b of type " + (typeof b));

let write = confirm("do you want write the page");
if(write){
    document.write(b)
}
else{
    document.write("Please allow me to write")
} 