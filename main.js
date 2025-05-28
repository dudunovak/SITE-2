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
const tempoObjetivo1 = new Date ("2027-08-10T09:00:00");
const tempoObjetivo2 = new Date ("2030-09-20T19:00:00");
const tempoObjetivo3 = new Date ("2026-02-29T00:00:00");
const tempoObjetivo4 = new Date ("2025-09-01T00:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]
function atualizaCronometro (){
    for (let i = 0; i <contadores.length; i++){
        document.getElementById ("dias"+i).textContent = calculaTempo(tempos [i])[0];
        document.getElementById ("horas"+i).textContent = calculaTempo(tempos [i])[1];
        document.getElementById ("min"+i).textContent = calculaTempo(tempos [i])[2];
        document.getElementById ("seg"+i).textContent = calculaTempo(tempos [i])[3];
    }
    for (let i = 0; i < contadores.length; i ++){
        //contadores[i]. textContent = calculatempo (tempos[i]);
    }
} 
function comecaCronometro (){
    atualizaCronometro ();
    setInterval (atualizaCronometro, 1000);
}
comecaCronometro();