let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function(){
    let question = document.getElementById("question")
    let mensage = document.getElementById("answer")

    card.style.backgroundImage = url("")
    question.style.display = "none";
    MessageChannel.style.display = "flex";
}); 