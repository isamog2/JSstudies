const marks = [80, 80, 50];

//Average = 70
//1-59: F
//60:69: D
//70-79: C
//80-89: B
//90-100: A


console.log(calculateGrade(marks));

function calculateGrade(marks) {
let sum = 0;
for (let mark of marks) {
    sum += 0
    let average = sum / marks.length;
}
}

function defineGrade(array) {
    let sum = 0;
    if (average < 60) return 'F';
    else if (average < 70) return 'D';
    else if (average < 80) return 'C';
    else if (average < 90) return 'B';
    return 'A';

}