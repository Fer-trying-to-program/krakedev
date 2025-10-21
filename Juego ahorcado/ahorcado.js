let palabraSecreta;
ingresarLetra=function(){
  let letra=recuperarTexto("txtLetra");
    if(letra>="A" && letra<="Z"){
        validar(letra);
    }else{
        alert("Solo se aceptan mayusculas")
    }

}
validar=function(letra){
    let letrasEncontradas
    let barridoLetra
    for(let i=0;i<palabraSecreta.length;i++){
        barridoLetra=palabraSecreta.charAt(i);
        if(letra==barridoLetra){
        mostrarLetra(letra,i);
        letrasEncontradas=+1
    }
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