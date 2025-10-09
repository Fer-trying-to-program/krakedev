comprobando=function(){
    let probando=recuperarTexto("txtPrueba");
    esMayuscula(probando);
    esDigito(probando);
    esGuion(probando);
}
esMayuscula=function(caracter){
let verificacion=caracter.charAt(0);
if(verificacion>="A" && verificacion<="Z"){
    return true;
}else{
    return false;
}
}
esDigito=function(digito){
let verificacion=digito.charAt(0);
if(verificacion>="0" && verificacion<="9"){
    return true;
}else{
    return false;
}
}
esGuion=function(guion){
let verificacion=guion.charAt(0);
if(verificacion=="_" || verificacion== "-"){
    return true;
}else{
    return false;
}
}