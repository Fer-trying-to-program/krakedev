let Lanzamientos=5;
let Puntaje=0;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    modificarPuntos(resultado);
    modificarLnzamientos();
    if(resultado==1){
        cambiarImagen("ImgDados","dados1.png");
    }else if(resultado==2){
        cambiarImagen("ImgDados","dados2.png");
    }else if(resultado==3){
        cambiarImagen("ImgDados","dados3.png");
    }else if(resultado==4){
        cambiarImagen("ImgDados","dados4.png");
    }else if(resultado==5){
        cambiarImagen("ImgDados","dados5.png");
    }else{
        cambiarImagen("ImgDados","dados6.png");  

    }
   
}
modificarPuntos=function(numero){
Puntaje=Puntaje+numero;
cambiarTexto("txtPuntos",Puntaje);
if(Puntaje>=20){
    cambiarTexto("txtInfoGanaste","GANASTE");
    limpiar();
    cambiarTexto("txtLanzamientos","0");
}

}
modificarLnzamientos=function(){
    Lanzamientos=Lanzamientos-1;
    cambiarTexto("txtLanzamientos",Lanzamientos);
    if(Lanzamientos==0){
        cambiarTexto("txtInfoGanaste","PERDISTE");
        limpiar(); 
}
}
limpiar=function(){
    Puntaje=0;
    Lanzamientos=5;
    cambiarTexto("txtPuntos","0");
    cambiarTexto("txtLanzamientos","5");
    cambiarImagen("ImgDados","0");
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}