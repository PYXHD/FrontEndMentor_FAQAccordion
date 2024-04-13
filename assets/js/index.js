const questions = document.querySelectorAll(".question-container");
const answers = document.querySelectorAll(".answer");
const plusIcon = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");

questions.forEach((question, index) => {
    question.addEventListener("click", () => {

        if (answers[index].style.display === "block") {
            answers[index].style.display = "none";
            plusIcon[index].style.visibility = "visible";
            minusIcon[index].style.visibility = "hidden";
        } else {
            answers[index].style.display = "block";
            plusIcon[index].style.visibility = "hidden";
            minusIcon[index].style.visibility = "visible";
        }
    });
});
