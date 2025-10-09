validarEstructura=function(placa){
    let contar
    let char1;
    let char2;
    let char3;
    let char4;
    let char5;
    let char6;
    let char7;
    let char8;
    contar=placa.length;
    char1=placa.charAt(0);
    char2=placa.charAt(1);
    char3=placa.charAt(2);
    char4=placa.charAt(3);
    char5=placa.charAt(4);
    char6=placa.charAt(5);
    char7=placa.charAt(6);
    char8=placa.charAt(7);

    if(contar<0 | contar>8){
        mostrarTexto("txtError","Debe tener al menos     7 caracteres, maximo 8");
    
    }else if(char1<"A" || char1>"Z"){
        mostrarTexto("txtError","El primer caracter debe ser una letra mayuscula");
    }else if(char2<"A" || char2>"Z"){
        mostrarTexto("txtError","El segundo caracter debe ser una letra m   ayuscula");

    }else if(char3<"A" || char3>"Z"){
        mostrarTexto("txtError","El tercer caracter deber ser una letra mayuscula");
    
    }else if(char4!="-"){
        mostrarTexto("txtError","El cuarto caracter debe ser un guion");
    
    }else if(char5<0 | char5>9 | isNaN(char5)){
        mostrarTexto("txtError","El quinto caracter deber ser un numero entre 0 y 9");
    }else if(char6<0 | char6>9 | isNaN(char6)){
        mostrarTexto("txtError","El sexto caracter deber ser un numero entre 0 y 9");
    }else if(char7<0 | char7>9 | isNaN(char7)){
        mostrarTexto("txtError","El septimo caracter deber ser un numero entre 0 y 9");
    }else if(char8<0 | char8>9 | isNaN(char8)){
        mostrarTexto("txtError","El octavo caracter deber ser un numero entre 0 y 9")
    }else{
        mostrarTexto("txtError","");
    } 
     if(contar>=0 && contar<=7 || contar==8){
        if(char1>="A" & char1<="Z" & char2>="A" & char2<="Z" & char3>="A" & char3<="Z" & char4=="-" & char5>="0" & char5<="9" & 
            char6>="0" & char6<="9" & char7>="0" & char7<="9" || char1>="A" & char1<="Z" & char2>="A" & char2<="Z" & char3>="A" & char3<="Z" & char4=="-" & char5>="0" & char5<="9" & 
            char6>="0" & char6<="9" & char7>="0" & char7<="9"& char8>="0" & char8<="9"){
                
                return null,false;
            }
        }
}