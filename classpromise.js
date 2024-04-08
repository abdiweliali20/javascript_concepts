function greeting() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const greetingdone =true;
            if(greetingdone){
                resolve("good morning everyone")
            }
            else{
                reject("greeting not done")
            }
        },1000);
    })
 

}
function welcome(){
    return new Promise((resolve,reject)=>{
setTimeout(function(){
    const welcomedone =true;
    if(welcomedone){
        resolve("welcome to our class")
    }
    else{
        reject("welcoming not done")
    }

    },1500)
})
}
function present(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const presentdone = true;
            if(presentdone){
                resolve("presentation of assignments")
            }
            else{
                reject("presentation of assignment not done")
            }
        },2000)
    })
   
}
function study(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const studydone = true;
            if(studydone){
            resolve("start actual class")

        }
        else{
            reject("actual class did not start")
        }

        },3000)
    })
  
}
function questions(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const questionsdone =true;
            if(questionsdone){
                resolve("anyone with a question")

            }
            else{
                reject("questions did not happen")
            }
               
    
        },2000)
    })
    
}
function bye(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const byedone = true;
            if(byedone){
                resolve("have a good afternoon")
            }
            else{
                reject("bye did not happen")
            }
           
            
        },400)  
    })

}
//method chaining
//greeting welcome
//present study questions 
//bye
greeting().then(value => {console.log(value); return welcome()})
          .then(value => {console.log(value);return present()})
          .then(value =>{console.log(value);return study()})
          .then(value =>{console.log(value);return questions()})
          .then(value=>{console.log(value);return bye()})
          .then(value=>{console.log(value);console.log("class done!")})
          .catch(error => console.error(error))