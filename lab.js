/*We have an array of school grades achieved at the end of primary cycle by students in a given class*/
var results = [9.20, 8.35, 9.98, 9.21, 9.12, 9.80, 9.44, 8.89, 9.12, 10, 10, 8.35, 7.67];
console.log(results);

/*What grade was achieved by the 3rd student? Remember that */
var score3 = results[2];
alert("Student no. 3 achieved a score of " + score3 + ".");

/*How many results are in the array (& students in the class)?*/
var numStudents = results.length;
alert('There are ' + numStudents + ' students in this class.');

/*I want to update the grade of the 10th student*/
alert("Student no. 10 current grade is " + results[9]);
results[9] = 9.99;
alert("After the update, student no. 10 current grade is " + results[9]);

/*I want a list of all students and their grades*/
for (var i = 0; i < results.length; i++) {
  var position = i + 1;
  console.log("student no. " + position + " has achieved a grade of " + results[i] + ".");
}
