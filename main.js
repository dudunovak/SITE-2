const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i=0; i <botoes.length; i++){
    botoes [i] .onclick = function(){
        for (let j=0; j < botoes.length; jj++){
            botoes [j] .classList.remove ("ativo");
            textos [j] .classList.remove ("ativo");
        }
        botoes [i] .classList.add ("ativo");
        textos [i] .classList.add ("ativo");
    }
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = new Date ("2025-10-10T09:34:21")
