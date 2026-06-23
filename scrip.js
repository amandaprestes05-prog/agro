function mostrarInformacoes() {
    var caixaDeInfo = document.getElementById("info-agricultura");
    var botao = document.querySelector(".btn-interativo");

    if (caixaDeInfo.style.display === "none" || caixaDeInfo.style.display === "") {
        caixaDeInfo.style.display = "block";
        botao.innerHTML = "Ocultar informações"; 
        botao.style.backgroundColor = "#E53935"; /* Muda para vermelho ao abrir */
        botao.style.borderColor = "#B71C1C";
    } else {
        caixaDeInfo.style.display = "none";
        botao.innerHTML = "Por que a Agricultura Familiar importa?"; 
        botao.style.backgroundColor = "#4CAF50"; /* Volta para o verde */
        botao.style.borderColor = "#388E3C";
    }
}
