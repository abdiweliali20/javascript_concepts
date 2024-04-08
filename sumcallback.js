function addition(callback, a,b){
    let result=a + b;
    callback(results);
}
function dsiplayAddition(results){
    console.log(results)
}
addition(displayAddition,1,1)