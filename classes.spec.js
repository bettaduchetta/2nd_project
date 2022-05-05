//'spec' is strictly a naming convention that tells us that this is a test file for its namesake
// it is so commonly used that frameworks will search for this term ie: *.spec.js

import * as assert from 'assert'
import * as classes from './classes.js'

let studentID='Egger';
let studentGPA= 4.00;
//let classID= 'math';
let classID= 'History';
let student= new classes.Student(studentID,studentGPA);
let classroom= new classes.Classroom(classID);
let cm= new classes.ClassroomManager;
/*
//inspect new Student
//inspect new Student.getsummary()
let studentOutput=student.getSummary(studentID,studentGPA);
assert.strictEqual(studentOutput.studentID, 'Egger');
assert.strictEqual(studentOutput.studentGPA, 4.00);
console.log('class Student.getsummary() a success');

//Classroom
//inspect new classroom.addstudent()
let addedStudent=classroom.addStudent(studentID, studentGPA);
assert.strictEqual(addedStudent.studentID, 'Egger');
assert.strictEqual(addedStudent.studentGPA, 4.00);
assert.strictEqual(classroom.students.length, 1);
console.log('Classroom addStudent() appears to be successful.');

//inspect new classroom.getStudentGPS()
let studentGrades= classroom.getStudentGPA(studentID);
assert.strictEqual(studentGrades, 4.00);
console.log('getStudentGPA() werks');
*/

//ClassroomManager
//inspect cm.addClasss()

cm.addClass(classID);
assert.strictEqual(cm.classes.length,1);
cm.getClass(classID).addStudent('liz',4);
cm.getClass(classID).addStudent('mike',4);
cm.getClass(classID).addStudent('Egger',4);
let eggIndex=cm.getClass(classID).getStudentIndex('Egger');
console.log(`Egger is: ${eggIndex} (expected:2)`);

//cm.getClassGPA('History')
//assert.strictEqual(cm.getClass(classID).students[0].studentID, 'Liz');
//assert.strictEqual(cm.getClass(classID).students[1].studentID, 'Egger');
//console.log('cm.removeClass() werks');
let GPA=cm.getClassGPA(classID);
assert.strictEqual(GPA, 3);
console.log(`Class ${classID} has an average GPA of ${GPA}`);



//inspect new Classroom.removeStudent()
/*let removeStudent= classroom.removeStudent(studentID);
assert.strictEqual(classroom.students.length, 0);
console.log('removestudent() werks');
*/

// a good first class is to make a CM and then ensure that CM.classes!==undef

//let cm= new classes.ClassroomManager();//classes. ect b/c we import classes as the .js folder

/*assert.notStrictEqual(cm.classrooms, undefined);

//cm.getClassroom(1);

// this will be used for empty classroom testing scenarios
cm.addClassroom('math');
//const mathIndex = cm.getClassIndex('math');
//assert.strictEqual(mathIndex, 0);
cm.getClassroom('math');

// this will be used for testing a classroom with actual students.
cm.addClassroom('history'); //create a new class (ie the desired class)
const historyIndex = cm.getClassIndex('history');
assert.strictEqual(historyIndex, 1);

//cm.classrooms[historyIndex].addStudent('liz', 4.0);
//cm.classrooms[historyIndex].addStudent('edgar', 2.0);

/* this should return 0.
const emptyGpaResult = cm.getClassroomGPA('math');
assert.strictEqual(emptyGpaResult, 0);*/

/* this should return 3.0
const studentGpaResult = cm.getClassroomGPA('history');
assert.strictEqual(studentGpaResult, 3.0);*/