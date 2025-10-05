//calcularValorDescuento=function(monto,porcentajeDescuento){
//    let suma=monto*porcentajeDescuento;
  //  let division=suma/100;
    //return division;
calcularIva=function(monto,restaDescuento){
    let suma=monto-restaDescuento;
    let total=suma*0.12;
    return total;
}
calcularSubtotal=function(precio,cantidad){
    let mult=precio*cantidad;
    return mult;
}
calcularTotal=function(subtotal,descuento,iva){
    let suma=subtotal-descuento+iva;
    return suma;
}
calcularDescuentoPorVolumen=function(subtotal,cantidad){
    if(cantidad<3){
    return 0;
}else if(cantidad>=3 && cantidad<=5){
    let descuento=subtotal*0.03;
    let fixed=descuento.toFixed(2);
    return fixed;
}else if(cantidad>=6 && cantidad<=11){
    let descuento=subtotal*0.04;
    let fixed=descuento.toFixed(2);
    return fixed;
}else if(cantidad>=12){
    let descuento=subtotal*0.05;
    let fixed=descuento.toFixed(2);
    return fixed;
}
}