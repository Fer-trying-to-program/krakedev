puntosUsuario=0;
puntosComputador=0;
jugar=function(selecionando){
    let suerte=generarElemento();
    let imagen=generarRuta(suerte);
    let ganador=determinarGanador(selecionando,suerte);
    CambiarImg("imgMaquina",imagen);
    if(ganador==0){
    CambiarTexto("txtResultado","Empate");
}else if(ganador==1){
    CambiarTexto("txtResultado","Gansate");
    puntosUsuario=puntosUsuario+1;
    CambiarTexto("txtPuntosUsuario","Puntos: "+puntosUsuario);
}else if(ganador==2){
    CambiarTexto("txtResultado","Perdiste");
    puntosComputador=puntosComputador+1;
    CambiarTexto("txtPuntosMaquina","En Contra: "+puntosComputador);
}
    if(puntosComputador==5){
        CambiarTexto("txtResultado","El computador te ha vencido");
        document.getElementById("botonOculto").style.display="block";
    }else if(puntosUsuario==5){
        CambiarTexto("txtResultado","Has vencido a la computadora");
        document.getElementById("botonOculto").style.display="block";
        
    }
}
limpiar=function(){
    CambiarImg("imgMaquina","");
    CambiarTexto("txtResultado","");
    CambiarTexto("txtPuntosUsuario","");
    CambiarTexto("txtPuntosMaquina","");
    puntosUsuario=0;
    puntosComputador=0;
}