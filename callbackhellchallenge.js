function challenge(callback){
    setTimeout(function(){
        console.log("working on challenge1")
        callback();
    },1000)
}
function challenge2(callback){
    setTimeout(function(){
        console.log("working on challenge2")
        callback();
    },1100)
}
challenge(function(){
    challenge2(function(){
        console.log("all challenges done")
    })
})