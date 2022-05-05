/*WORKS*/export class Student {
    //studentID=null; //why is it that when i have these they cause an error?
    //studentGPA=null;

    constructor(studentID, studentGPA) {    
        this.studentID = studentID;
        this.studentGPA = studentGPA;
    }
    /*WORKS*/getSummary() {    
        return { studentID: this.studentID, studentGPA: this.studentGPA };                        
    }
}

export class Classroom {

    //students = [];

    constructor(classID) {                      
        this.classID = classID;
        this.students = [];
    }

    //WORKS will add a student to a specific class' students array
    addStudent(studentID, studentGPA) {  
        let newStudent= new Student(studentID, studentGPA);
        this.students.push(newStudent);
        return newStudent;
    }
    
    //WORKS will tell us a specific student's GPA
    getStudentGPA(studentID){
        let studentGrades= this.students[this.getStudentIndex(studentID)].studentGPA;
        
        //console.log(`GSGPA 3 ${studentGrades}`);
        return studentGrades;
    }

    //WORKS will remove a specific student from a specific class' students array
    removeStudent(studentID) {
      this.students.splice(this.getStudentIndex(studentID),1);
            
       return this.students;
    }

    //WORKS will provide the index of requested student
    getStudentIndex(studentID){
        let studentIndex=NaN;
        for (let i=0; i<this.students.length; i++){
        let thisStudent= this.students[i];
            if(thisStudent.studentID=== studentID){
                studentIndex=i;
            }
        }
        return studentIndex;

    }

}

export class ClassroomManager { 
    //classes[]
    constructor(){
        this.classes=[];
    }

    //WORKS adds a class to classes
    addClass(classID){
        let newClass= new Classroom(classID);
        this.classes.push(newClass); 
        return this.classes;
    }

    //WORKS provides the index of a requested class
    getClassIndex(classID){
        let classIndex= NaN;
        for(let i=0; i<this.classes.length; i++){
            let myClass= this.classes[i];
            if(myClass.classID===classID){
                classIndex=i;
            }
        }
        return classIndex;
    }

    //WORKS removes requested class from classes[]
    removeClass(classID){
        let classIndex= this.getClassIndex(classID);
        this.classes.splice(classIndex,1);
        return this.classes;
    }

    //WORKS provides class =====this.classes[i]
    getClass(classID){
        let myClass=undefined;
        for(let i=0; i<this.classes.length; i++){
            let thisClass= this.classes[i];
            if(thisClass.classID===classID){
                myClass=thisClass;
            }
        }
        return myClass;
    }

    //WORKS provides the average GPA for a requested class
    getClassGPA(classID){
        let GPA= NaN;
        let totalStudents=0;
        let accruedGPA=0;

        let ourClass=this.getClass(classID);
        for(let i=0; i<ourClass.students.length; i++){
            let StudentInClass= ourClass.students[i];
            if(StudentInClass.studentID!==undefined){
                totalStudents=totalStudents+1;
                accruedGPA= accruedGPA+parseFloat(StudentInClass.studentGPA);
            }
        }
        GPA= accruedGPA/totalStudents;
        return GPA;

    }
}
