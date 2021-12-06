/*Creating Event Handler to Show Error when there is no element in name*/ 
window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{                                                                //Try catch block to catch error thrown when name entered is according to regex.
            (new EmployeePayrollData()).name=name.value;;
            textError.textContent="";
        }
        catch(e){
            textError.textContent=e;
        }
    });
    const salary= document.querySelector('#salary');                        //Event Handler to update value when we scroll salary column
    const output =document.querySelector('.salary-output');

    output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });
});
/**save() method to save data */
const save = () =>{                                                 //save function to save the details
    try{
        let employeePayrollData=createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }
    catch (e){
        return;
    }
}
/**CreateAndUpdateStorage() method to save it to local storage  */
function createAndUpdateStorage(employeePayrollData){
        
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
    employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList = [EmployeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}


const createEmployeePayroll= () =>{                                         //inserting try catch block to catch error trown when name is entered wrong
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e){
        setTextValue('.text-error',e);
        throw e;
    }
                                                                                            //taking all user input values and setting latest values for name,gender.
    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('#salary');
    employeePayrollData.salary=getSelectedValues('#notes');
    
    let date=getInputValueById('#day')+getInputValueById('#month')+" "+getInputValueById('#year');

    employeePayrollData.date=Date.parse(date);
    alert("Details Entered");
    return employeePayrollData;
}
/* getSelectedValues() method to push all the values entered by user to array of setItems*/
const getSelectedValues = (propertyValue) => {
    let allItems =document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if(item.checked) setItems.push(item.value);
    });
    return setItems;
}
/**getInputValueById() method to verify values. and modify date in require format]
 * 
 */
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
/*getInputElementValue() method to take input values  */
const getInputElementValue = (id) => {
    let value =document.getElementById(id).value;
    return value;
}

/**resetForm() method to rest form to default */

const resetForm = ()=>{
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });

}

const setTextValue = (id,value) => {
    const element =document.querySelector(id);
    element.textContent = value;
}

/**setValue() method to reset form to default */
const setValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
}
