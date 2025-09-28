calcularValorDescuento=function(monto,porcentajeDescuento){
    let suma=monto*porcentajeDescuento;
    let division=suma/100;
    return division;
}
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