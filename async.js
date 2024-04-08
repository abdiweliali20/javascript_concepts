function greeting() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const onedone =true;
            if(onedone){
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
    const twodone =true;
    if(twodone){
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
            const threedone = true;
            if(threedone){
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
            const fourdone = true;
            if(fourdone){
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
            const fivedone =true;
            if(fivedone){
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
            const sixdone = true;
            if(sixdone){
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
async function doclass(){
    try{
        const oneresult = await greeting();
        console.log(oneresult);

        const tworesult = await welcome();
        console.log(tworesult);

        const threeresult = await present();
        console.log(threeresult);

        const fourresult = await study();
        console.log(fourresult);

        const fiveresult = await questions();
        console.log(fiveresult);

        const sixresult =await bye();
        console.log(sixresult);

        console.log("class is done");
    }
    catch(error){
        console.error(error);
    }
}
  doclass();