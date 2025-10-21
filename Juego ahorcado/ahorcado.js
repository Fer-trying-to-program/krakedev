let palabraSecreta;
let intentosJugador=0;
let coincidencias=0;
let errores=0;
ingresarLetra=function(){
    intentosJugador=intentosJugador+1
  let letra=recuperarTexto("txtLetra");
    if(letra>="A" && letra<="Z"){
        validar(letra);
    }else{
        alert("Solo se aceptan mayusculas")
    }
if(coincidencias==5){
    mostrarImagen("ahorcadoImagen","./ganador.gif");
}else if(intentosJugador==10){
    mostrarImagen("ahorcadoImagen","./gameOver.gif");
}
}
mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","./Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","./Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","./Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","./Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","./Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","./Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","./Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","./Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","./Ahorcado_09.png");
    }
}
validar=function(letra){
    let letrasEncontradas=false;
    let barridoLetra;
    for(let i=0;i<palabraSecreta.length;i++){
        barridoLetra=palabraSecreta.charAt(i);
        if(letra==barridoLetra){
        mostrarLetra(letra,i);
        letrasEncontradas=true;
        coincidencias=coincidencias+1    
    }
}
if(letrasEncontradas==false){
    errores=errores+1;
    mostrarAhorcado()
    alert("La letra no es parte de la palabra");
}

}
mostrarLetra=function(letra,posicion){
    if(posicion==0){
        mostrarTexto("div0",letra);
    }else if(posicion==1){
        mostrarTexto("div1",letra);
    }else if(posicion==2){
        mostrarTexto("div2",letra);
    }else if(posicion==3){
        mostrarTexto("div3",letra);
    }else if(posicion==4){
        mostrarTexto("div4",letra);
    }
}

    guardarPalabra=function(){
    let guardarTxt =recuperarTexto("txtSecreta")
    let longitud=guardarTxt.length
    let letra
    let mayuscula;
    let comprobarMayuscula=true
    if(longitud>5 | longitud<5){
        alert("Debe tener 5 caracteres");
    }else if(longitud==5){
    for(let i=0;i<guardarTxt.length;i++){
        letra=guardarTxt.charAt(i);
        mayuscula=esMayuscula(letra);
        longitud=5;
        if(mayuscula==false){
            comprobarMayuscula=false;
        }
    }
}
    if(longitud==5 && comprobarMayuscula==true){
        palabraSecreta=guardarTxt
    }else if(comprobarMayuscula==false){
        alert("Debe tener 5 Mayusculas");
    }
    }
esMayuscula=function(caracter){
    if(caracter>="A" && caracter<="Z"){
        return true;
    }else{
        return false;
    }
}


//No se olvide de respirar, mantenga la calma y demuestre lo que sabe