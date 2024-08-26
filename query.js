const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const content = document.querySelector(".content");


import questions from "./questions.js";

const item = questions[currentIndex];
  answers.innerHTML = "";

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);

    document.querySelectorAll(".answer").forEach(item)
});