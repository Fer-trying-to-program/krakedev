invocar=function(){
    let txt=recuperarTexto("txt");
    recorrerCadena(txt);
}
invocar2=function(){
    let a=recuperarTexto("txt");
    recorrercadenaInvertida(a);
    buscarLetra(a,"P")

}
recorrerCadena=function(cadena){
    let letra;

    for(let posicion=0;posicion<cadena.length;posicion++){
        letra=cadena.charAt(posicion);
        console.log("Caracter "+letra+" posicion: "+posicion);
    }
}

recorrercadenaInvertida=function(cadena){
    let resultado = "";
    for(let i = cadena.length - 1; i >= 0; i--){
        resultado += cadena.charAt(i); 
        console.log(cadena.charAt(i)); 
    }
    mostrarTexto("txtResultado",resultado);
}
buscarLetra=function(cadena,letra){
    let existeletra=false;
    let guardar;
    for(let i=0;i<cadena.length;i++){
        guardar=cadena.charAt(i);
        if(guardar==letra);
        existeletra=true;
    }
    if(existeletra==true){
        console.log("existe"+"");
    }else{
        console.log('no existe');
    }
}