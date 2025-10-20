ejecutarValidacion=function(){
    let recuperar=recuperarTexto("txtCaja");
    let validacion=validarPassword(recuperar);
    if(validacion==true){
        CambiarTexto("validacion","todo OK")
    }
}
validarPassword=function(password){
    let longitud=password.length;
    let validarLongitud=true;
    let validarMayuscula=true;
    let validarNumero=true;
    let validarCaracterEspecial=true;
    let letra;
    for(let i=0;i<longitud;i++){
        letra=password.charAt(i);
    if(letra>="A" && letra<="Z"){
        validarMayuscula=false;
    }else{
        CambiarTexto("error","Debe contener al menos una mayuscula");
    }
    if(letra>="0" && letra<="9"){
        validarNumero=false;    
    }else{
        CambiarTexto("error","Debe haber al menos un numero")
    }
    if(letra=="*" | letra=="-" | letra=="_"){
        validarCaracterEspecial=false;
    }else{
        CambiarTexto('error',"Debe tener un caracter especial")
}
 if(longitud>=8 && longitud<=16){
        validarLongitud=false;
    }else{
        CambiarTexto("error","Debe haber de 8 a 16 caracteres");
    }
}
if(validarLongitud==false & validarMayuscula==false & validarNumero==false & validarCaracterEspecial==false){
    CambiarTexto("error","")
    return true;
    
}else{
    return false;
}

}