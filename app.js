alert('Boas vindas ao nosso site!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;
while (chute != numeroSecreto){
    chute = prompt('Escolha um numero de 1 a 100');
    if (chute == numeroSecreto) {
        break;
    }
    else
    {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute + '!');
        }
        else {
            alert('O número secreto é maior que ' + chute + '!');
        }
        tentativas++;
    }
}

let palavraS = tentativas > 1 ? ' tentativas' : ' tentativa';
alert('Parabéns! O número era ' + numeroSecreto + ', você conseguiu em ' + tentativas + palavraS +'!' );
