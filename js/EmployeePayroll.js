class EmployeePayrollData{
    /*Getters and setters to get the values and Intialise the values*/ 
    get id(){
        return this._id;
    } 
    set id(id){
        this._id=id;
    }

    get name(){
        return this.name;
    }
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
        this._name=name;
        else throw ('Name is Incorect!');
    }

    get profilePic(){
        return this._profilePic;
    }

    set profilePic(profilePic){
        this._profilePic=profilePic;
    }

    get gender(){
        this._gender;
    }

    set gender(gender){
        this._gender=gender;
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department=department;
    }

    get salary(){
        return this._salary;
    }

    set salary(salary){
        this._salary=salary;
    }

    get note(){
        return this._note;
    }

    set note(note){
        this._note=note;
    }

    get startDate(){
        return this._startDate=this.startDate;
    }

    set startDate(startDate){
        this.startDate=startDate;
    }

    toString(){
        const options={year : 'numeric',month: 'long',day:'numeric'};
        const empDate=!this.startDate? "undefined":this.startDate.toLocalDateString("en-US",options);
        return "ID: "+this._id+" Name: "+this._name+" Gender: "+this._gender+" ProfilePic: "+this._profilePic+" Department: "+this._department+" Salary: "+this._salary+" StartDate: "+empDate+" Note: "+this._note;
    }
}