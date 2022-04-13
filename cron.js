

let hora = document.getElementById('hora');
let minuto = document.getElementById('minuto');
let segundo = document.getElementById('segundo');

let segundoAtual = 0;
let minutoAtual = 0;
let horaAtual = 0;



let botaoInicio = document.getElementById('btn-start');
let botaoPause = document.getElementById('pausar');
let botaoReset = document.getElementById('reset');




botaoInicio.addEventListener('click', () => {
    var intervalo = setInterval(iniciar, 1000);
    botaoPause.disabled = false;
    botaoInicio.disabled = true;
    botaoReset.disabled = false;

    botaoPause.addEventListener('click', () => {
        clearInterval(intervalo);
        botaoInicio.disabled = false;
        botaoPause.disabled = true;
    })

    botaoReset.addEventListener('click', ()=> {
        clearInterval(intervalo);
        segundoAtual = 0;
        segundo.innerHTML = "0" + segundoAtual;
        minutoAtual = 0;
        minuto.innerHTML = "0" + minutoAtual;
        horaAtual = 0;
        hora.innerHTML = "0" + horaAtual;
        botaoInicio.disabled = false;
        botaoPause.disabled = true;
        botaoReset.disabled = true;
    })
})








function iniciar() {



    if (segundoAtual < 60) {

        if (segundoAtual < 9) {
            segundoAtual++
            segundo.innerHTML = "0" + segundoAtual;
        } else {
            segundoAtual++
            segundo.innerHTML = segundoAtual;
        }



        if (segundoAtual === 60) {
            segundoAtual = 0;
            segundo.innerHTML = "0" + segundoAtual;

            if (minutoAtual < 9) {
                minutoAtual++;
                minuto.innerHTML = "0" + minutoAtual;
            } else {
                minutoAtual++;
                minuto.innerHTML = minutoAtual;
            }


            if (minutoAtual === 60) {
                minutoAtual = 0;
                minuto.innerHTML = "0" + minutoAtual;

                if (horaAtual < 9) {
                    horaAtual++;
                    hora.innerHTML = "0" + horaAtual;
                } else {
                    horaAtual++;
                    hora.innerHTML = horaAtual;
                }

            }
        }
    }

}


