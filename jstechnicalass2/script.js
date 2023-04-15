console.log("Hello World");

//No.1

const student = ["John", "Jane", "Joe"];
function list ()
{
    console.log(`${student[0]} is added to the student's list` )
    console.log(`${student[1]} is added to the student's list` )
    console.log(`${student[2]} is added to the student's list` )
}
list(student);

function listAverage () {
    console.log(`There are total of ${student.length} students in the student's list.`);
}
listAverage(student);

//NO.2
function list2 ()
{
    console.log(student[1]);
    console.log(student[2]);
    console.log(student[0]);
}
list2(student);

//NO.3



//NO.4
let addSection = ["s1", "s2", "s3"];
function emptyArray ()
{
   
}


//No5
student.reverse();
let newSplice = student.splice(1);
function removeList ()
{
    console.log (`${student} was removed from the student's list.`);
}
removeList();
console.log(newSplice);


//ARRAY OF OBJECTS
const studentGrades = [
    {
        studentId:1,
        Q1:89.3,
        Q2:91.2,
        Q3:93.3,
        Q4:89.8
    },

    {
        studentId:2,
        Q1:69.2,
        Q2:71.3,
        Q3:76.5,
        Q4:81.9
    },

    {
        studentId:3,
        Q1:95.7,
        Q2:91.4,
        Q3:90.7,
        Q4:85.6
    },

    {
        studentId:4,
        Q1:86.9,
        Q2:74.5,
        Q3:83.3,
        Q4:86.1
    },

    {
        studentId:5,
        Q1:70.9,
        Q2:73.8,
        Q3:80.2,
        Q4:81.8
    }
];


for (let i = 0; i<studentGrades.length; i++)
{
//Compute the average grade of each student object.
    let forLoopAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4)/4
    console.log(forLoopAve);
    
 
    studentGrades[i].forLoopAve = parseFloat(forLoopAve.toFixed(2));
}
console.log(studentGrades);



//1.Add a new person object to the people array.
let people = [
    {
        Name: 'John',
        age: 30,
        gender: 'male'
    },
    {
        Name: 'Jane',
        age: 25,
        gender: 'female'
    },
    {
        Name: 'Bob',
        age: 40,
        gender: 'male'
    }
]
console.log(people);

people[3] = {Name: 'Kevin', age: 20, gender: 'male'};
console.log(people);

//2.Remove the person object with the name "John" from the people array.
delete people[0];
console.log(people);

//3. Sort the people array by age, from oldest to youngest.
people.sort (
    function (a,b) {
        return b - a ;
    }
);
console.log(people)

//4.Find the first-person object in the people array with an age greater than or equal to 30.
