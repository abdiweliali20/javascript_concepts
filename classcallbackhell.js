function greeting(callback) {
    setTimeout(function(){
        console.log("Goodmorning everyone")
        callback();

    }, 1000)

}
function welcome(callback){
    setTimeout(function(){
        console.log("welcome to our class")
        callback();

    },1500)
}
function present(callback){
    setTimeout(function(){
        console.log("presentation of assignments")
        callback();
    },2000)
}
function study(callback){
    setTimeout(function(){
        console.log("start actual class")
        callback();

    },3000)
}
function questions(callback){
    setTimeout(function(){
        console.log("anyone with a question")
        callback();

    },2000)
}
function bye(callback){
    setTimeout(function(){
        console.log("have a good afternoon")
        callback();
    },400)
}
//callback hell
greeting(function(){
    welcome(function(){
        present(function(){
            study(function(){
                questions(function(){
                    bye(function(){
                        console.log("class done")
                    })
                })
            })
        })
    })

})


