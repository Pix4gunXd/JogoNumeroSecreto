let listaNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumero();
let tentativas = 1;

mensagemInicial()


function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor');
        }else {
            exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite){
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero()
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirTextoTela(tag, texto){
    let variavel = document.querySelector(tag);
    variavel.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial(){
    exibirTextoTela('h1', 'Guess N');
    exibirTextoTela('p', 'Digite um número 1 - 100');
}