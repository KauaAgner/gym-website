function gerarLinkWhatsapp() {
    var primeiroNome = document.getElementById('primeiro_nome').value;
    var segundoNome = document.getElementById('segundo_nome').value;

    if (primeiroNome && segundoNome) {
        var mensagem = `Oi, eu sou o ${primeiroNome} ${segundoNome}, vim pelo site e quero me matricular!`;

        var mensagemCodificada = encodeURIComponent(mensagem);

        var linkWhatsapp = `https://api.whatsapp.com/send?phone=5573982078074&text=${mensagemCodificada}`;

        window.open(linkWhatsapp, "_blank");
    } else {
        alert('Por favor, preencha ambos os campos de nome!');
    }
}