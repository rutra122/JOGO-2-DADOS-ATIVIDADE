var rodada = 0;
var jogadorAtual = 1;
var pontosJogador1 = 0;
var pontosJogador2 = 0;
const jogarDado1 = document.getElementById("jogarDado1");
const jogarDado2 = document.getElementById("jogarDado2");
const reiniciar = document.getElementById("Reiniciar");
const jogadordocument = document.getElementById("resultado");
function jogarDado(jogador) {
  if (jogador == jogadorAtual) {
    var resultado = Math.floor(Math.random() * 6) + 1;

    if (jogador == 1) {
      pontosJogador1 += resultado;
    } else {
      pontosJogador2 += resultado;
    }

    rodada++;

    if (rodada == 20) {
      if (pontosJogador1 > pontosJogador2) {
        jogadordocument.innerHTML = "Jogador 1 ganhou!";
      } else if (pontosJogador2 > pontosJogador1) {
        jogadordocument.innerHTML = "Jogador 2 ganhou!";
      } else {
        jogadordocument.innerHTML = "Empate!";
      }
    } else {
      jogadordocument.innerHTML = "Rodada " + Math.ceil(rodada / 2) + ": ";

      if (jogador == 1) {
        jogadordocument.innerHTML += "Jogador 1 jogou " + resultado + ". ";
      } else {
        jogadordocument.innerHTML += "Jogador 2 jogou " + resultado + ". ";
      }

      if (rodada % 2 == 0) {
        if (pontosJogador1 > pontosJogador2) {
          jogadordocument.innerHTML += "Jogador 1 está ganhando!";
        } else if (pontosJogador2 > pontosJogador1) {
          jogadordocument.innerHTML += "Jogador 2 está ganhando!";
        } else {
          jogadordocument.innerHTML += "Empate!";
        }
      }
    }

    jogadorAtual = jogadorAtual == 1 ? 2 : 1;
  }
}

function reiniciarPartida() {
  rodada = 0;
  pontosJogador1 = 0;
  pontosJogador2 = 0;
  jogadorAtual = 1;
  jogadordocument.innerHTML = "Jogo reiniciado!";
}
jogarDado1.onclick = () => jogarDado(1);
jogarDado2.onclick = () => jogarDado(2);
reiniciar.onclick = reiniciarPartida;