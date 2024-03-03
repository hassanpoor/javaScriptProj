let arrayOfQuestion = []
addCardForm = function (event) {
    var form = new FormData(event.target)
    let question = form.get("questionInput")
    let answer = form.get("answerInput")
    addCard(question, answer)
    event.preventDefault();
}

addCard = function (question, answer) {
    arrayOfQuestion.push({"question": question, "answer": answer})
    showCard()
}

onloadForm = function () {
    event.preventDefault();

}
showCardAnswer = function (input) {
    debugger
    var lblAnswer = input.target.elements.lblAnswer

    if (lblAnswer.hidden) {
        lblAnswer.hidden = false
    } else {
        lblAnswer.hidden = true
    }
    event.preventDefault();
}
showCard = function () {
    debugger
    document.getElementById("CardContainer").innerHTML = null
    for (var i = 0; i < arrayOfQuestion.length; i++) {
        let form = document.createElement("form")
        var lblQuestion = document.createElement("input");
        lblQuestion.value = arrayOfQuestion[i].question
        lblQuestion.readOnly = true
        var lblAnswer = document.createElement("input");
        lblAnswer.value = arrayOfQuestion[i].answer
        lblAnswer.readOnly = true
        lblAnswer.hidden = true
        lblAnswer.name = "lblAnswer"
        lblAnswer.className = "lblAnswer"
        var showCard = document.createElement("input");
        showCard.type = "submit"
        showCard.id = "a"
        showCard.textContent = "Show Card"
        form.appendChild(lblQuestion)
        form.appendChild(document.createElement("br"))
        form.appendChild(lblAnswer)
        form.appendChild(document.createElement("br"))
        form.appendChild(showCard)
        form.appendChild(document.createElement("br"))
        form.setAttribute("class", "cardForm")
        form.addEventListener("submit", showCardAnswer)
        document.getElementById("CardContainer").appendChild(form)
    }

}