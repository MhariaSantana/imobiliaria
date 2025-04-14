function mostrarHoraAtual() {
    let agora = new Date();
    let hora = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let horaAtual = hora + ':' + minutos ;
    document.getElementById('relogio').textContent = horaAtual;
  }
  setInterval(mostrarHoraAtual, 1000); 



  document.addEventListener("DOMContentLoaded", function () {
    let registerButton = document.querySelector(".footer-button");
    let emailInput = document.querySelector(".footer-text-input");

    registerButton.addEventListener("click", function () {
        
        let email = emailInput.value;
        if (email) {
            
            alert("Seu e-mail " + email + " foi cadastrado com sucesso!");
            emailInput.value = "";
        } 
    });
});









 // Obter todos os botões usando a classe comum
var buttons = document.querySelectorAll(".hero-button2");

// Obter o elemento da imagem usando a classe existente
var bannerImage = document.querySelector(".banner");

// Caminhos das imagens para trocar
var imagePaths = [
    "images/banner01.jpg", 
    "images/banner02.jpg", 
    "images/banner03.jpg", 
    "images/banner04.jpg"
];
// Adicionar eventos de clique para cada botão
buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        bannerImage.src = imagePaths[index]; // Troca a imagem com base no índice do botão
    });
});





  






