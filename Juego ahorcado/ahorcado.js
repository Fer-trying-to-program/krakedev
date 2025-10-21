let palabraSecreta;
guardarPalabra=function(){
    let guardarTxt =recuperarTexto("txtSecreta")
    let longitud=guardarTxt.length
    let letra
    let mayuscula;
    if(longitud=!5){
        alert("Debe tener 5 caracteres");
    }else{
    for(let i=0;i<guardarTxt.length;i++){
        letra=guardarTxt.charAt(i);
        mayuscula=esMayuscula(letra);
        longitud=5;
        if(mayuscula==true){
            mayuscula=true;
        }else{
            mayuscula=false;
        }
    }
}

    if(longitud==5 && mayuscula==true){
        palabraSecreta=guardarTxt
    }else if(longitud==false){
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