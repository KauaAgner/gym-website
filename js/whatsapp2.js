window.onload = function () {
    var nomeCompleto = localStorage.getItem('nome_completo');

    if (nomeCompleto) {
        document.getElementById("nome_completo").value = nomeCompleto;
    }
};

function mostrarAlerta(mensagem) {
    const alerta = document.getElementById("alert");
    alerta.textContent = mensagem;
    
    setTimeout(() => {
        alerta.textContent = "";
    }, 6000);
}

document.getElementById('cpf').addEventListener('input', function(e) {
    let cpf = e.target.value.replace(/\D/g, '');

    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
    }

    e.target.value = cpf;
});

function validarInputs() {
    const nome = document.getElementById("nome_completo").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("data_nascimento").value.trim();
    const nascimentoFormatado = nascimento.split("-").reverse().join("/");
    const endereco = document.getElementById("endereco").value.trim();
    const plano = document.querySelector('input[name="plano"]:checked')?.value;

    if (nome === "") {
        mostrarAlerta("Por favor, preencha com o nome completo.");
        return false;
    }

    if (nome.split(" ").length < 2) {
        mostrarAlerta("Digite o nome completo.");
        return false;
    }

    const nomeComNumerosRegex = /\d/;
    if (nomeComNumerosRegex.test(nome)) {
        mostrarAlerta("O nome não pode conter números.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarAlerta("E-mail inválido.");
        return false;
    }

    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpf.replace(/\D/g, ""))) {
        mostrarAlerta("CPF inválido. Digite apenas números.");
        return false;
    }

    const telefoneRegex = /^\d{10,11}$/;
    if (!telefoneRegex.test(telefone.replace(/\D/g, ""))) {
        mostrarAlerta("Telefone inválido. Digite com DDD, apenas números.");
        return false;
    }

    if (nascimento === "") {
        mostrarAlerta("Data de nascimento é obrigatória.");
        return false;
    }

    if (endereco === "") {
        mostrarAlerta("Endereço é obrigatório.");
        return false;
    }

    if (!plano) {
        mostrarAlerta("Escolha um plano.");
        return false;
    }

    return {
        nome,
        email,
        cpf,
        telefone,
        nascimentoFormatado,
        endereco,
        plano
    };
}

function capitalizePrimeiraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function gerarLinkWhatsapp() {
    const dados = validarInputs();
    if (!dados) return;

    const mensagem = `
    Olá! Estou enviando minha ficha de pré-matrícula preenchida pelo site:
    
    💪 *Ficha de Pré-Matrícula* 💪
    👤 *Nome:* ${dados.nome}
    📧 *E-mail:* ${dados.email}
    🆔 *CPF:* ${dados.cpf}
    📞 *Telefone:* ${dados.telefone}
    🎂 *Nascimento:* ${dados.nascimentoFormatado}
    🏠 *Endereço:* ${dados.endereco}
    💳 *Plano Escolhido:* ${capitalizePrimeiraLetra(dados.plano)}

    Aguardo os próximos passos para finalizar minha matrícula. Obrigado!`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const numeroWhatsApp = "5573982078074";
    const link = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`;

    window.open(link, "_blank");
}
