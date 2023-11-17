console.log("hello")


const questions = ["What is your name?", "How old are you?","Where do you live?"];

const ques = document.getElementById("question");
const btn = document.getElementById("btn")


document.addEventListener("DOMContentLoaded",function(e){
    ques.textContent = questions[Math.floor(Math.random() * questions.length)];

})

