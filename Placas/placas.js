
validarPlaca=function(){
    let valorIngresado=recuperarTexto("txtPrueba");
    let validacion
    let provincia
    validacion=validarEstructura(valorIngresado);
    provincia=obtenerProvincia(valorIngresado);
    if(validacion==false){
        mostrarTexto("txtValidacion", "la placa es valida");
    if(provincia==true){
        obtenerDiaPicoYPlaca(valorIngresado);
    }
    if(provincia==false){
        mostrarTexto("txtValidacion","la placa no es valida");
        mostrarTexto("txtPicoYPlaca","");
        mostrarTexto("txtPlacas","Vehiculo incorrecto");
    }
}
}
    

limpiar=function(){
    mostrarTexto("txtError","");
    mostrarTexto("txtPlacas","");
    mostrarTexto("txtPicoYPlaca","");
    mostrarTexto("txtValidacion","");
    mostrarTextoEnCaja("txtPrueba","");
} 