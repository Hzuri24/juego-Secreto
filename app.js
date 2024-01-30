let NumeroMaximoPosible=10;
let NumeroSecreto = 0;
let ListaDeNumerosSorteados=[];
//let NumeroSecreto = Math.floor(Math.random()*NumeroMaximoPosible)+1;
//let NumeroUsuario=0;
let intentos=0 ;
let MaximosIntentos=3;
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'juego del numero secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'indica un numero del 1 al 10';
*/
// control F para buscar.
function textorapido(etiquetas,texto){
    let etiquetasHTML = document.querySelector(etiquetas);
    etiquetasHTML.innerHTML = texto;
    return;
}
function IntentoDeUsuario(){
    //parseint sirve para cambiar de String a entero;
    let numeroUsuario = parseInt(document.getElementById('ValorUsuario').value);//usar typeof para saber el tipo de dato 
    console.log(numeroUsuario);
    console.log(NumeroSecreto);
    if(numeroUsuario == NumeroSecreto){
        textorapido('p',`Acertaste , solo te tomo ${intentos} ${ intentos==1 ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(numeroUsuario < NumeroSecreto){
            textorapido('p','El numero es mayor.');
        }else{
            textorapido('p','El numero es menor .'); 
        }
        if(intentos > MaximosIntentos){
            textorapido('p','Exediste los 3 intentos, comienza de nuevo.');
        }
        intentos++;
        limpiarCaja();
    }
    return ;
}

function limpiarCaja(){
    document.querySelector('#ValorUsuario').value='  ';
}

function generarNumeroSecreto() {
    let numeroGnerado =  Math.floor(Math.random()*NumeroMaximoPosible)+1;
    //si el numero generado esta en la lista:
    if(ListaDeNumerosSorteados.length == NumeroMaximoPosible){
        textorapido("p","ya se sortearon todos los numeros Posibles.");
    }
    if(ListaDeNumerosSorteados.includes(numeroGnerado)){
        return generarNumeroSecreto();
    }else{
        ListaDeNumerosSorteados.push(numeroGnerado);
        return numeroGnerado;
    }
}
function CondicionesIniciales(){
    textorapido('h1','juego del numero secreto!');
    textorapido('p', `indica un numero del 1 al ${NumeroMaximoPosible}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
CondicionesIniciales();
function reinicio(){
    //Todo esto es lo que tiene que hacer el codigo:
    //limpiar caja.
    limpiarCaja();
    //indicar mensaje de inicio.
    CondicionesIniciales(); //esta funcion hace casi todos los requerimientos;
    //generar otro numero aleatorio.
    //desabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //inicializar el nuemro de intentos.
    
}




/*while(NumeroUsuario != NumeroSecreto){
    NumeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y el ${NumeroMaximoPosible} por favor:`));//permite ingresar datos en el programaa
    console.log(NumeroUsuario);//(typeof) nos menciona cual es el tipo de dato el cual estamos manejando.
    if (NumeroUsuario == NumeroSecreto) {
        alert(`Acertaste, el número es : ${NumeroUsuario} , lo hiciste en ${intentos} ${ intentos==1 ? 'vez' : 'veces'}.`);// de esta forma puedes usar tanto una cadena de string como una carible en java
    }else{
        if(NumeroUsuario > NumeroSecreto){
            alert('El numero debe de ser menor');
        }
        if(NumeroUsuario < NumeroSecreto){
            alert('El numero debe de ser mayor '); 
        }
        //alert('No acertaste el numero');
        if(intentos >= MaximosIntentos){
            alert(`llegaste a tu numero maximo de ${MaximosIntentos}  intentos.`);
            break;
        }
    }
    //incremento el contador cuando no acierte
    intentos = intentos + 1;
}*/
