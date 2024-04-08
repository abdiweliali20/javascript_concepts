function hello(callback){
    setTimeout(function(){
        console.log("hello")
        callback();
    },3000);
}
hello(bye);

function welcome(){
    console.log("welcome to our class")
}
function bye(){
    console.log("bye!bye!")
}