obtenerAleatorio=function(){
    let numeroAleatorio=Math.random();
    let sumar=numeroAleatorio*4;
    let aproximado=parseInt(sumar);
    if(aproximado==0){
        let ayuda=aproximado+1
        return ayuda;
        }else{
    return aproximado
}
}
generarElemento=function(){
    let numeroAleatorio=obtenerAleatorio();
    if(numeroAleatorio==1){
        return "piedra";
    }else if(numeroAleatorio==2){
        return "papel";
    }else if(numeroAleatorio==3){
        return "tijera";

    }
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1=="piedra" & eleccionJugador2=="papel" | 
        eleccionJugador1=="tijera" & eleccionJugador2=="piedra"
    | eleccionJugador1=="papel" & eleccionJugador2=="tijera"){
        return 2;
    }
if(eleccionJugador1=="papel" & eleccionJugador2=="piedra"|
    eleccionJugador1=="piedra" & eleccionJugador2=="tijera" |
    eleccionJugador1=="tijera" & eleccionJugador2=="papel"){
    return 1;
    }
if(eleccionJugador1=="piedra" & eleccionJugador2=="piedra" |
     eleccionJugador1=="papel" & eleccionJugador2=="papel" | 
     eleccionJugador1=="tijera" & eleccionJugador2=="tijera"){
    return 0
}
}
generarRuta=function(nombre){
    if(nombre=="Piedra" || nombre=="piedra"){
        return "./imagenes/piedra.png"
    }else if(nombre=="Papel" || nombre=="papel"){
        return "./imagenes/papel.png"
    }else if(nombre=="Tijera" | nombre=="tijera" | nombre=="Tijeras" | nombre=="tijeras"){
        return "./imagenes/tijera.png"
    }
    }