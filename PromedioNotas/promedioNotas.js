calcularPromedioNotas=function(){
    let guardar1=recuperarFlotante("nota1");
    let guardar2=recuperarFlotante("nota2");
    let guardar3=recuperarFlotante("nota3");
    let redondear
    let promedio
    promedio=calcularPromedio(guardar1,guardar2,guardar3);
    redondear=promedio.toFixed(2);
    cambiarTexto("txtPromedio", redondear);
    if(promedio>7){
        cambiarImagen("imgPromedio","basado.gif");
        }else{
            cambiarImagen("imgPromedio","payaso.gif");
    }

}