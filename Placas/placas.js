validarPlaca=function(){
    let valorIngresado=recuperarTexto("txtPrueba");
    let validacion
    validacion=validarEstructura(valorIngresado);
    if(validarEstructura(valorIngresado) ==false){
        mostrarTexto("txtValidacion", "la placa es valida");
    }else{
        mostrarTexto("txtValidacion","la placa no es valida");
    }
}  