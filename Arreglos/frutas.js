let frutas=["PERA","MANZANA","BANANA"];
probarBusqueda=function(){
    let guardar=document.getElementById("txt");
    let info=guardar.value;
    let resultado=buscar(info);
    if(resultado==null){
        alert("no existe la fruta");   
    }else{
        alert("fruta encontrada "+resultado)
    }
}
buscar=function(fruta){
    let elementos;
    let frutaEncontrada=null;
    for(let i=0;i<frutas.length;i++){
        elementos=frutas[i];
        if(elementos==fruta){
            frutaEncontrada=elementos;
            break;
        }
    }
    return frutaEncontrada;
}