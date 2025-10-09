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
        mostrarTexto("txtError","El segundo caracter debe ser una letra mayuscula");

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
obtenerProvincia=function(placa){
let char
char=placa.charAt(0);
if(char=="A"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Azuay");
}else if(char=="B"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Bolizar");
}else if(char=="U"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Cañar");
}else if(char=="C"){
    mostrarTexto("txtPlacas", "su placa es de la provincia de Carchi");
}else if(char=="X"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Cotopaxi");
}else if(char=="H"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de chimborazo");
}else if(char=="O"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de El Oro");
}else if(char=="E"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Esmeraldas");
}else if(char=="W"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Galapagos");
}else if(char=="G"){
    mostrarTexto("txtPlacas","Su placa es de la provincia del Guayas");
}else if(char=="I"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Imbabura");
}else if(char=="L"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Loja");
}else if(char=="R"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Los Rios");
}else if(char=="M"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Manabi");
}else if(char=="V"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Morona Santiago");
}else if(char=="N"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Napo");
}else if(char=="S"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Pastaza");
}else if(char=="P"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Pichincha");
}else if(char=="K"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Sucumbios");
}else if(char=="Q"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Orellana");
}else if(char=="T"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Tungurahua");
}else if(char=="Z"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Zamora Chinchipe");
}else if(char=="Y"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Santa Elena");
}else{
    mostrarTexto("txtplacas","");
    return null,false;
}
}