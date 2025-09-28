saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=transformarInt("txtEdad");
    let estatura=transformarFloat("txtEstatura");
}
recuperarTexto=function(idComponente){
    let guardar
    let recuperar=document.getElementById(idComponente);
    guardar=recuperar.value;
    return guardar;
}
transformarInt=function(idComponente){
    let guardar=recuperarTexto(idComponente);
    let Int=parseInt(guardar);
    return Int;
}
transformarFloat=function(idComponente){
    let guardar=recuperarTexto(idComponente);
    let float=parseFloat(guardar);
    return float;
}