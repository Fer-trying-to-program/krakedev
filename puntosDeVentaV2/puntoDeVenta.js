let bulian=false;
calcularValorTotal=function(){
    let nombreProducto;
    let precioProducto;
    let cantidad; 
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    bulian=false;
    nombreProducto=recuperarTexto("txtProducto");
    precioProducto=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");
    controlDeCajasDeTexto(nombreProducto,precioProducto,cantidad);
if(bulian==false){
valorSubtotal=calcularSubtotal(precioProducto,cantidad);
mostrarTexto("lblSubtotal",valorSubtotal);
valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
mostrarTexto("lblDescuento",valorDescuento);
valorIVA=calcularIva(valorSubtotal,valorDescuento);
mostrarTexto("lblValorIVA",valorIVA);
valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
mostrarTexto("lblTotal",valorTotal);
mostrarTexto("lblResumen","El valor a pagar por "+cantidad+" "+nombreProducto+" con "+valorDescuento+"%"+" de descuento "+"="+" "+valorTotal+"Usd");
}
}
    controlDeCajasDeTexto=function(nombre,precio,cuanto){
    let ContarLetras=nombre.length;
    if(ContarLetras>10){
        mostrarTexto("txtNoFunciona","El nombre del producto no debe exceder los 10 caracteres");
        bulian=true;
    }else{
        mostrarTexto("txtNoFunciona"," ");
        }if(cuanto<0 | cuanto>100 | isNaN(cuanto)){
            mostrarTexto("txtNoFunciona1","La cantidad debe ser un valor entre 1 y 100");
            bulian=true;
        }else{
            mostrarTexto("txtNoFunciona1"," ");
        }
        if(precio<0 | precio>50 | isNaN(precio)){
        mostrarTexto("txtNoFunciona2","El precio debe ser un valor entre 1 y 50");
        bulian=true;
        }else{
            mostrarTexto("txtNoFunciona2"," ");

}
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto"," ");
    mostrarTextoEnCaja("txtCantidad"," ");
    mostrarTextoEnCaja("txtPrecio"," ");
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal","0.0");
    mostrarTexto("lblResumen","");
}
/* SI TODO FUNCIONA, HACER UN PUSH */