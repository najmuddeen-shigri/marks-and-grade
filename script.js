const students = [
    {name: "David", marks: 80},
    {name: "Vinorth", marks: 77},
    {name: "Divya", marks: 88},
    {name: "Ishitha", marks: 95},
    {name: "Thomas", marks: 68}

];

let totalMarks = 0;
for(let i=0; i<students.length; i++){
    totalMarks += students[i].marks;
}

let averageMarks = totalMarks/students.length;

let grade;
if(averageMarks<60){
    grade = "F";
}
else if(averageMarks<70){
    grade = "D"
}
else if(averageMarks<80){
    grade = "C"
}
else if(averageMarks<90){
    grade = "B"
}
else{
    grade = "A"
}

console.log(`The average marks of the students is: ${averageMarks}`);
console.log(`The grade is: ${grade}`)
