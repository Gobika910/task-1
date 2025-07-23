//let globalVar = "i am global"
//function say(){
  // console.log("hai global scope");
    //console.log(" within"+globalVar);
//}
//say()
//console.log("outside"+globalVar);

//function voting(age){
  //  if(age>=18){
    //    let iscloudy=true;
      //  var israining=true;
        //console.log("eligible")
       // console.log(iscloudy)
    //}
    //console.log(israining);
//}
//voting(18);
function text(){
    console.log("message");
}
function send(callback){
    console.log("message sended");
    setInterval(callback,1000);
}
send(text);
let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count <5){
        Interval();
    }
}
Interval();