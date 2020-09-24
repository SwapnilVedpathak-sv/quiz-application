var submitButton = document.getElementById('submit');
var liTags = document.querySelectorAll('ul li');

////////////////////////////////////////////// this is a onload function //////////////////////////////////////////////

window.onload = function () {
  showQuestions(0);
}

////////////////////////////////////////////// it's a question array //////////////////////////////////////////////

var questions = [
  {
    question: " What does HTML stand for ?",
    answer: 0,
    option: [
      "Hyper Text Markup Language",
      "HyperLinks and Text Markup Language",
      "Home Tool Markup Language",
      "HyperLink Markup Language"
    ]
  },
  {
    question: " The Bootstrap grid system is based on how many columns ?",
    answer: 2,
    option: [
      '6',
      '9',
      '12',
      '3'
    ]
  },
  {
    question: ' What does CSS stand for ?',
    answer: 1,
    option: [
      'Colorful Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Computer Style Sheets'
    ]
  },
  {
    question: " Which property is used to change the background color ?",
    answer: 2,
    option: [
      "bgcolor",
      "color",
      "background-color",
      "text-align"
    ]
  },
  {
    question: " Javasctipt is the same as Java ?",
    answer: 1,
    option: [
      "True",
      "False",
      "Both Of Above",
      "None Of These"
    ]

  },
  {
    question: " Which event occurs when the user clicks on an HTML element ?",
    answer: 3,
    option: [
      "onchange",
      "onmouseclick",
      "onmouseover",
      "onclick"
    ]
  },
  {
    question: " Is JavaScript case-sensitive ?",
    answer: 0,
    option: [
      "True",
      "False",
      "Both Of Above",
      "None Of These"
    ]
  }
]

let question_count = 0;
var correctAnswerCount = 0;
var totalQuestions = questions.length;
sessionStorage.setItem('numberOfQuestions', totalQuestions);

////////////////////////////////////////////// it Shows correct incorrect answer and display next button //////////////////////////////////////////////

function checkAnswer() {
  let user_answer = document.querySelector("li.option.active");

  if (user_answer.innerHTML == questions[question_count].option[questions[question_count].answer]) {
    user_answer.className = 'correct';
    correctAnswerCount++;
  } else {
    user_answer.className = 'wrong';
    var correctAnswer = Array.from(document.querySelectorAll('ul li'));
    correctAnswer[questions[question_count].answer].className = 'correct';
  }

  question_count++;
  submitButton.innerHTML = 'CONTINUE';
  submitButton.id = 'next';

  if (question_count != questions.length) {
    submitButton.onclick = () => { showQuestions(question_count) };
  } else {
    submitButton.innerHTML = 'FINISH';
    submitButton.id = 'finish';
    submitButton.onclick = () => { finishButton() };
  }

  sessionStorage.setItem("correctAnswerCount", correctAnswerCount)

}

////////////////////////////////////////////// It shows Question //////////////////////////////////////////////

function showQuestions(count) {
  let question = document.getElementById("questions");
  question.innerHTML = `<h2>Q${question_count + 1}.${questions[count].question}</h2>
        <ul class="option_group">
        <li class="option">${questions[count].option[0]}</li>
        <li class="option">${questions[count].option[1]}</li>
        <li class="option">${questions[count].option[2]}</li>
        <li class="option">${questions[count].option[3]}</li>
        </ul>`;

  toggleActive();
  submitButton.innerHTML = 'SUBMIT';
  submitButton.id = 'submit';
  submitButton.disabled = true;
  showNumber(question_count);
  submitButton.onclick = () => { checkAnswer(), correctCount() };

  if (sessionStorage.getItem("name")) {
    let name = sessionStorage.getItem("name");
    user_name = name.toUpperCase();
    document.getElementById("header_no").innerHTML = user_name;
  }
}

////////////////////////////////////////////// It add active class with option //////////////////////////////////////////////

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      submitButton.disabled = false;

      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}

////////////////////////////////////////////// It Shows Count Of Question ////////////////////////////////////////////// 

function showNumber() {
  let quizNumber = document.getElementById("quizNumber");
  quizNumber.innerHTML = `<span>Question ${question_count + 1}<span>/7</span></span>`;
}

function finishButton() {
  location.href = "end.html";
}

///////////////////////////////////////////// It Will Disable The Google Back Button //////////////////////////////////    

history.pushState(null, document.title, location.href);

window.addEventListener('popstate', function (event) {
  history.pushState(null, document.title, location.href);
});

////////////////////////////////////////// It Will Display PopUp When Click Close Button /////////////////////////////

var modal = document.getElementById("myModal");
var btn = document.getElementById("but");
var span = document.getElementsByClassName("close")[0];
var start = document.getElementById("startTag");
var Quit = document.getElementById("quitTag");
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
start.onclick = function () {
  modal.style.display = "none";
}
Quit.onclick = function () {
  if (document.getElementById("quitTag")) {
    location.href = "end.html";
  }
}

////////////////////////////////////////// It Will Display Correct Answer Count /////////////////////////////////

function correctCount() {
  let correctTag = document.getElementById("correctTag");
  correctTag.innerHTML = `<span>${correctAnswerCount}/${questions.length} Correct</span>`;
}