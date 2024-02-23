let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//limitar las veces que vas a jugar antes de un nuevo juego
//para sacar el buscador en vs es ctrl+f
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(intentos==3){
            NuevoJuego();
            asignarTextoElemento('p','Fin del juego');
            document.querySelector('#intentar_').setAttribute('disabled','true');
        }
        //El usuario no acertó.
       else if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function NuevoJuego(){
   // document.querySelector('#reiniciar').setAttribute('disabled','true');
   document.getElementById('reiniciar').removeAttribute('disabled');
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
   // let partida=2;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {//si el tamano del arreglo es igual 10 (porque eso vle numeroMximo)
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    document.getElementById("segundo_texto_parrafo").innerHTML='Tienes 3 intentos antes de iniciar un nuevo juego';
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
       document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();