console.log("start")
setTimeout(function(){
    console.log("setTimeout");
},2000);
console.log("End")

//example2
console.log("start here")
console.log("Then get here")
document.getElementById("btn").removeEventListener("ckick",function(){
    console.log("button clicked")})
    console.log("finish here")