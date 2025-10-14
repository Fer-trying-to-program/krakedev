
CambiarCaja=function(IdComponente,mensaje){
    let componente=document.getElementById(IdComponente);
    componente.value=mensaje;
}
recuperarTexto=function(IdComponente){
    let componente=document.getElementById(IdComponente);
    let ValorIngresado=componente.value;
    return ValorIngresado;
}
Transformar=function(IdComponente){
    let Encontrar=recuperarTexto(IdComponente);
    let Transformar=parseInt(Encontrar);
    return Transformar;
}
Float=function(IdComponente){
    let Encontrar=recuperarTexto(IdComponente);
    let Transformar=parseFloat(Encontrar);
    return Transformar;
}
CambiarTexto=function(txt,mensaje){
    let Encontrar=document.getElementById(txt);
    Encontrar.innerText=mensaje;
}
CambiarImg=function(Ubicacion,Imagen){
    let Encontrar=document.getElementById(Ubicacion);
    Encontrar.src=Imagen;
}
