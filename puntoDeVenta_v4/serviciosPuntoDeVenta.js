calcularValorDescuento=function(monto,porcentajeDescuento){
    let suma=monto*porcentajeDescuento;
    let division=suma/100;
    return division;
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