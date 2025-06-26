function mostrarAlerta(mensagem) {
    const alerta = document.getElementById("alert");
    alerta.innerHTML = mensagem;
    alerta.style.display = "flex";
    
    setTimeout(() => {
        alerta.style.display = "none";
        alerta.textContent = "";
    }, 6000);
}

function gerarLinkWhatsapp() {
    var primeiroNome = document.getElementById("primeiro_nome").value;
    var segundoNome = document.getElementById("segundo_nome").value;

    if (primeiroNome && segundoNome) {
        localStorage.setItem('nome_completo', primeiroNome + ' ' + segundoNome);

        window.location.href = 'test/teste.html';
    } else {
        mostrarAlerta('<i class="ph ph-warning"></i> <span>Por favor, preencha os dois campos!</span> <i class="ph ph-warning"></i>');
    }
}