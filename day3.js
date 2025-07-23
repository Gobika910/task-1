//Global Scope:
//variable declared outside any function or block are in the global scope. they are accessible anywhere in the ScriptProcessorNode.

//function Say(){
    //console.log("Hi, Global Scope")
    //console.log("within"+a)
//}
//Say()

//function scope
//function say(){
    //let name="java script";
    //console.log("function scope");
    //console.log("within the fun"+name);
//}
//say()
//Block Scope
//the Block scope of a variable means that the variable is accesible within 
//the block that is between the curly braces.

//function Voting(age){
    //if(age>=18){
        //const iscloudy=true;
        //var israining=true;
        //console.log("Eligible");
        //console.log(iscloudy);
    //}
    //console.log(israining);
    //console.log(iscloudy);//throw err
//}
//Voting(18)

//Local Scope
//same as function or block scope depending on context
//callback function

// function text(){
//     console.log("Hello");
// }
// text();
// function send(callback){
//     console.log("Innovation Lab")
//     setInterval(callback,2000);
// }
// send(text);

let count=0;
 let  Interval=()=>{
     count++;
     console.log(count);
     if(count < 5){
         Interval();
     }
 }
Interval();