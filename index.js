import {gsap} from 'gsap'; 


//selecting the questions
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) { //all question loop
    //const arrowBtn = question.querySelector(".question-btn");
    const questionTitle = question.querySelector(".show");
    
    //for the question clicked on
    questionTitle.addEventListener('click', function () {
        //to auto close text of another question
        
        questions.forEach(function (item) {
            //to auto close displayed text
            if (item !== question) {
                item.classList.remove("showy");
               
            }
        });
        
        question.classList.toggle("showy");
        
        
    });
});
