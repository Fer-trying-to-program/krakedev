saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
}
recuperarTexto=function(idComponente){
    let guardar
    let recuperar=document.getElementById(idComponente);
    guardar=recuperar.value;
    return guardar;
}
