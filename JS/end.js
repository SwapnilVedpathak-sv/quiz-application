var points = document.querySelector(".point");
let name = sessionStorage.getItem("name");
let correctAnswerCount = sessionStorage.getItem("correctAnswerCount");
let numberOfQuestions = sessionStorage.getItem('numberOfQuestions');

calcuateCorrectAnsPercent(correctAnswerCount, numberOfQuestions, points);

user_name = name.toUpperCase();
document.querySelector(".name").innerHTML = user_name;


////////////////////////////////// Calculate percent //////////////////////////////////

function calcuateCorrectAnsPercent(correctAnscount, totalQuestions, element) {
    var percent;
    if (correctAnscount && totalQuestions) {
        percent = correctAnscount / totalQuestions * 100;
    }
    if (element) {
        element.innerHTML = percent.toFixed(0) + " %. ";
    }
    return percent
}

////////////////////////////////// Show Date /////////////////////////////////////

var date = new Date();
var a = date.getDate();
var b = date.getMonth() + 1;
var c = date.getFullYear();
document.getElementById("endDate").innerHTML = "Date: " + a + "/" + b + "/" + c;

///////////////////////////////////////////// It Will Disable The Google Back Button ////////////////////////////////////    

history.pushState(null, null, location.href);
history.back(); history.forward();
window.onpopstate = function () {
    history.go(1);
};

///////////////////////////////////////////// It Will Show The Text After Display result  ////////////////////////////////////  
function showText() {
    if (calcuateCorrectAnsPercent(correctAnswerCount, numberOfQuestions) >= 70) {
        document.getElementById("congratulationWord").innerHTML = "Congratulations"
        document.getElementById("trophy").innerHTML = "🏆";
        document.getElementById("highScoreStatement").innerHTML = "You have passed the HTML quiz";
    } else {
        document.getElementById("sorryWord").innerHTML = "Sorry!!";
        document.getElementById("sadFace").innerHTML = "☹️";
        document.getElementById("lowScoreStatement").innerHTML = "This is less than the required passing percentage of 70";
    }
}
showText();