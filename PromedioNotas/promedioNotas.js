calcularPromedioNotas=function(){
    let guardar1=recuperarFlotante("nota1");
    let guardar2=recuperarFlotante("nota2");
    let guardar3=recuperarFlotante("nota3");
    let redondear
    let promedio
    promedio=calcularPromedio(guardar1,guardar2,guardar3);
    redondear=promedio.toFixed(2);
    cambiarTexto("txtPromedio", redondear);
    if(promedio<5 && promedio>0){
        cambiarImagen("imgPromedio","payaso.gif");
    }else if(promedio>=5 && promedio<=8){
        cambiarImagen("imgPromedio","squidward-spongebob.gif");
    }else if(promedio>8 && promedio<=10){
        cambiarImagen("imgPromedio","basado.gif");
    }else{
        cambiarImagen("imgPromedio","meme-think.gif");
        cambiarTexto("txtPromedio","Datos Incorrectos");
    }

}