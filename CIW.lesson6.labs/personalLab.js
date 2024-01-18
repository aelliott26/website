var nam1 = prompt("Please enter your first name.", "");
var nam2 = prompt("Please enter your last name", "");

function addNames(arg1, arg2) {
    return arg1 + " " + arg2;
}
document.write("Hello " + addNames((nam1), (nam2)) + " your quiz is ready for you");
function getSelectedSports() {
    var selectedSports = "";
    for (i = 0; i < document.sport.sports.length; i++) {
        if (document.sport.sports[i].checked == true) {
            selectedSports += document.sport.sports[i].value;
        }
    }
    return selectedSports;
}

function takeTest() {
    var response = "";
    var points = 0;

    var q1 = "What is " + nam1 + "'s favorite color?";
    var a1 = "IDK";
    
    var len = nam2.length
    var q2 = "How many letters are in " + nam2;
    var a2 = len;

    var selectedSports = getSelectedSports();
    var q3 = "What is " + addNames(nam1, nam2) + "'s favorite sport?";
    var a3 = selectedSports;

    response = prompt(q1, "");
    if (response) points = runningTotal((response.toUpperCase() == a1) ? 1 : 0);

    response = prompt(q2, "");
    if (response) points = runningTotal((response == a2) ? 1 : 0);

    response = prompt(q3, "");
    if (response) points = runningTotal((response.toUpperCase() == a3) ? 1 : 0);

    alert("Hello " + addNames(nam1, nam2) + "! You answered a total of " + points + " correctly.");
}

var numCorrect = 0;

function runningTotal(i) {
    numCorrect += i;
    return numCorrect;
}