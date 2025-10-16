puntosUsuario=0;
puntosComputador=0;
jugar=function(selecionando){
    let suerte=generarElemento();
    let imagen=generarRuta(suerte);
    let ganador=determinarGanador(selecionando,suerte);
    CambiarTexto("txtMaquina","Tu rival:")
    CambiarImg("imgMaquina",imagen);
    if(ganador==0){
    CambiarTexto("txtResultado","Empate");
    CambiarImg("imgMaquina","./imagenes/Empate.png")
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
        CambiarImg("imgPapel","");
        CambiarImg("imgPiedra","");
        CambiarImg("imgTijera","");
        CambiarImg("imgMaquina","");
        CambiarTexto("txtMaquina","");
        CambiarTexto("titulo","");

    }else if(puntosUsuario==5){
        CambiarTexto("txtResultado","Has vencido a la computadora");
        document.getElementById("botonOculto").style.display="block";
        CambiarImg("imgPapel","");
        CambiarImg("imgPiedra","");
        CambiarImg("imgTijera","");
        CambiarImg("imgMaquina","");
        CambiarTexto("txtMaquina","");
        CambiarTexto("titulo","");
        
    }
}
limpiar=function(){
    CambiarTexto("txtPuntosUsuario","Puntos: 0");
    CambiarTexto("txtPuntosMaquina","En contra: 0");
     document.getElementById("botonOculto").style.display="none";
     CambiarTexto("titulo","Piedra papel o tijera");
    CambiarImg("imgPapel","./imagenes/papel.png");
    CambiarImg("imgPiedra","./imagenes/piedra.png");
    CambiarImg("imgTijera","./imagenes/tijera.png");
    CambiarImg("imgMaquina","");
    CambiarTexto("txtResultado","");
    puntosUsuario=0;
    puntosComputador=0;
}