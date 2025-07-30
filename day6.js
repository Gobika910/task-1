let employees=[];
//add empn
function addEmp(id,name,salary=true){
    employees.push({id,name,salary});
    console.log("Employee added",employees);
}
addEmp(1,"vikashini",20000)
addEmp(2,"nithu",30000)
addEmp(3,"varshi",400)
function updateEmp(id,newDetail){
    const emp=employees.find(e => e.id === id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("update",employees)
    }else{
        console.log("employee not found")
    }  
}
updateEmp(3, {name:"roshi"});
//delete emp
function removeEmp(id){
    const index = employees.findIndex((e) => e.id === id);
    if(index !== -1){
        employees.splice(index,id)
        console.log("employees removed",employees)
    }else{
        console.log("employee not found");
    }
}
removeEmp(1)
//calculate total salary
function totalsalary(){
    const total=employees.reduce((sum,emp) => sum+emp.salary,0);
    console.log("total salary is",total);
}
totalsalary()