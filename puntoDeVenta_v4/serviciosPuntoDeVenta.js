calcularValorDescuento=function(monto,porcentajeDescuento){
    let int=parseInt(monto);
    let int2=parseInt(porcentajeDescuento);
    let suma=monto*porcentajeDescuento/100;
    return suma;
}
calcularIva=function(monto){
    let int=parseInt(monto);
    let suma=int*0.12;
    return suma;
}
calcularSubtotal=function(precio,cantidad){
    let mult=precio*cantidad;
    return mult;
}
calcularTotal=function(subtotal,descuento,iva){
    let int=parseInt(subtotal);
    let int2=parseInt(descuento);
    let int3=parseInt(iva);
    let suma=int-int2+int3;
    return suma;
}