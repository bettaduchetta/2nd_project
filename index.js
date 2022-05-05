import{ClassroomManager, Classroom, Student} from './classes.js';

import { default as promptSync } from 'prompt-sync';
//import { ClassroomManager } from './classes';
const prompt= promptSync();

const userInput= prompt('Hello, please press ENTER again and then provide class or class and student information');
const exitKeyword = 'quit';

// making a classroomManager here, b/c if it exists inside the loop all data will be lost
let cm= new ClassroomManager();
let c= new Classroom('gibberish');
let s= new Student('gibberish','gibberish');

while(true) {
    const userInput = prompt('> ');             //Provides an asethic > 
    console.log(`You provided: ${userInput}`);   //repeats what user has told them

    if(userInput === exitKeyword) {             // if user types 'quit' the program ends
        process.exit(0);
    }
    else {
        const myArguments = userInput.split(' ');    //otherwise the program splits information into array(s)
    
        let part1= myArguments[0];
        let part2= myArguments[1];
        let part3= myArguments[2];
        let part4= myArguments[3];
        let part5= myArguments[4];
        let part6= myArguments[5];

        //WORKS following provides a new class
        if (part1==='new'&&part2==='class'){
           let classID= part3;
           cm.addClass(classID);
           console.log(`You have added ${classID} as a class.`)
        }

        //WORKS following provides new student
        else if(part1==='class'&&part3==='new'&&part4==='student'){
            let classID= part2;
            let studentID= part5;
            let studentGPA= part6;
            
            cm.getClass(classID).addStudent(studentID, studentGPA);
            console.log(`You have added ${studentID} as a student to ${classID} class.`)
        }

        //WORKS following will remove a class
        else if( part1==='remove'&&part2==='class'){
            let classID= part3;

            cm.removeClass(classID);
            console.log(`You have deleted ${classID} class and its pertaining information.`)
        }

        //WORKS following will remove a student
        else if(part1==='class'&&part3==='remove'&&part4==='student'){
            let classID= part2;
            let studentID= part5;

            cm.getClass(classID).removeStudent(studentID);
            console.log(`You have deleted ${studentID} from ${classID} class`);
        }

        //WORKS following will provide a specific student's GPA
        else if(part1==='class'&&part3==='student'){
            let classID= part2;
            let studentID= part4;

            let GPA=cm.getClass(classID).getStudentGPA(studentID);
            console.log(`${studentID}'s GPA is: ${GPA}`);
        }

        //WORKS following will provide a specific class' average GPA
        else if(part1==='class'&&part3===undefined){
            let classID= part2;

            let GPA= cm.getClassGPA(classID);
            console.log(`The average grade in ${classID} class is ${GPA} `);
        }

        //***The following will respond to incorrect syntax
        else{
            console.log('Incorrect syntax. Please present your request as ether a class, or a specific student in a class');
            //console.log('0: '+part1+ '     1: '+ part2+ '     2: '+ part3);
        }
        
    }
}