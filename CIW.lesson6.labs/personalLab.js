 function addNames (arg1, arg2) {
        var result = arg1 + " "+ arg2;
        return result;
      }
      
var nam1 = prompt("Please enter your first name.","");
var nam2 = prompt("Please enter your last name","");
    
document.write("Hello " + addNames((nam1), (nam2)) + " your quiz is ready for you");


function vote()
{
   var t=""
   for (i=0; i<document.myform.sports.length; i++)
   {
      if (document.myform.sports[i].checked==true)
      {
         t =t +document.myform.sports[i].value
      }
   }
}
let numCorrect = 0;

function takeTest() {
    let response="";
	let points = 0;

	let q1 = "What is "+ nam1 +"'s favorite color?";
	let a1 = "Nope";

	let q2 = "How many letters are in "+ nam2;
	let a2 = 3;

	let q3 = "What is "+ addNames(nam1, nam2) +" favorite sport?";
	let a3 = t;

	response = prompt(q1,"");
	if (response) points = runningTotal((response.toUpperCase() == a1) ? 1 : 0);
	alert(points);

	response = prompt(q2,"");
	if (response) points = runningTotal((response == a2) ? 1 : 0);
	alert(points);

	response = prompt(q3,"");
	if (response) points = runningTotal((response.toUpperCase() == a3) ? 1 : 0);
	alert("You answered a total of " + points + " correctly.");

	numCorrect = 0;
	points = 0;
}

function runningTotal(i) {
  numCorrect += i; 
  return numCorrect;
}