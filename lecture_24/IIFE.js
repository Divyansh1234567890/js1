//Immediately Invoked Function Expression 

(function chai(){
    console.log(`DB CONNECTED`);
}());
//IMPORTANT
////to prevent from the pollution of global scope IIFE is used
//basic syntax of IIFE->()()

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)//DB CONNECTED 
})("divyansh")
