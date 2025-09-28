saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=transformarInt("txtEdad");
    let estatura=transformarFloat("txtEstatura");
    mostrarTexto("resultado","hola, "+" "+nombre+" "+apellido);
    mostrarImagen("img","./Imagenes/baldi-playtime.gif");
    mostrarTextoEnCaja("txtNombre","");
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
mostrarTexto=function(idComponente,texto){
    let recuperar=document.getElementById(idComponente);
    recuperar.innerText=texto;
}
mostrarImagen=function(idComponente,Img){
    let recuperar=document.getElementById(idComponente);
    recuperar.src=Img;
}
mostrarTextoEnCaja=function(idComponente,texto){
    let guardar=document.getElementById(idComponente);
    guardar.value=texto;
}