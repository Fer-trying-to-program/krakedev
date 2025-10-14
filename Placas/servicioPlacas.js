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
    
    }else if(char5<0 | char5>9 | isNaN(char5) | char5==""){
        mostrarTexto("txtError","El quinto caracter deber ser un numero entre 0 y 9");
    }else if(char6<0 | char6>9 | isNaN(char6) | char6==""){
        mostrarTexto("txtError","El sexto caracter deber ser un numero entre 0 y 9");
    }else if(char7<0 | char7>9 | isNaN(char7) | char7==""){
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
                
                return false;
            }
        }
}
obtenerProvincia=function(placa){
let char
char=placa.charAt(0);
if(char=="A"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Azuay");
    return true;
}else if(char=="B"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Bolizar");
    return true;
}else if(char=="U"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Cañar");
    return true;
}else if(char=="C"){
    mostrarTexto("txtPlacas", "su placa es de la provincia de Carchi");
    return true;
}else if(char=="X"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Cotopaxi");
    return true;
}else if(char=="H"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de chimborazo");
    return true;
}else if(char=="O"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de El Oro");
    return true;
}else if(char=="E"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Esmeraldas");
    return true;
}else if(char=="W"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Galapagos");
    return true;        
}else if(char=="G"){
    mostrarTexto("txtPlacas","Su placa es de la provincia del Guayas");
    return true;
}else if(char=="I"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Imbabura");
    return true;
}else if(char=="L"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Loja");
    return true;
}else if(char=="R"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Los Rios");
    return true;
}else if(char=="M"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Manabi");
    return true;
}else if(char=="V"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Morona Santiago");
    return true;
}else if(char=="N"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Napo");
    return true;
}else if(char=="S"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Pastaza");
    return true;
}else if(char=="P"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Pichincha");
    return true;
}else if(char=="K"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Sucumbios");
    return true;
}else if(char=="Q"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Orellana");
    return true;
}else if(char=="T"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Tungurahua");
    return true;
}else if(char=="Z"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Zamora Chinchipe");
    return true;
}else if(char=="Y"){
    mostrarTexto("txtPlacas","Su placa es de la provincia de Santa Elena");
    return true;
}else{
    mostrarTexto("txtPlacas","Letra no valida");
    return false

}
}
obtenerDiaPicoYPlaca=function(placa){
    let longitud=placa.length-1;
    let char=placa.charAt(longitud);
    if(char==1 || char==2){
        mostrarTexto("txtPicoYPlaca","El lunes tiene pico y placa");
    }else if(char==3 || char==4){
        mostrarTexto("txtPicoYPlaca","El martes tiene pico y placa");
        }else if(char==5 || char==6){
        mostrarTexto("txtPicoYPlaca","El miercoles tiene pico y placa");
        }else if(char==7 || char==8){
        mostrarTexto("txtPicoYPlaca","el jueves tiene pico y placa");
        }else if(char==9 || char==0){
        mostrarTexto("txtPicoYPlaca","El viernes tiene pico y placa");
        }
    }