calcularTasaIntereses=function(ingresoAnual){
    let flotar=ingresoAnual.parseFloat();
    let valor1=16
    let valor2=15
    let valor3=14
    let valor4=13
    let valor5=12
    if(flotar<300000){
        return valor1
    }else if(flotar>300000 && flotar<500000){
        return valor2;
    }else if(flotar>500000 && flotar<1000000){
        return valor3;
    }else if(flotar>1000000 && flotar<2000000){
        return valor4;
    }else if(flotar>=2000000){
        return valor5;
    }
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let transformar=edad.parseInt();
    let transformar2=ingresos.parseFloat();
    let transformar3=egresos.parseFloat();
    let guardar=transformar2-transformar3
    let guardar2=guardar*0.30
    let guardar3=guardar*0.40
    if(transformar>50){
        return guardar2
    }else if(transformar>=50){
        return guardar3
    }
}
calcularDescuento=function(precio,cantidad){
    let transformar=precio.parseFloat();
    let transformar2=cantidad.parseInt();
    let calcular=transformar*0.02
    let calcular2=transformar*0.03
    let calcular3=transformar*0.04
    if(transformar2>=3){
        return 0
    }else if(transformar2>3 && transformar2<5){
        return calcular
    }else if(transformar2>6 && transformar2<11){
        return calcular2
    }else if(transformar2>=12){
        return calcular3
    }
}
determinarColesterolILDL=function(nivelColesterol,genero,edad){
    let transformar=nivelColesterol.parseFloat();
    let contar=genero.length;
    if(transformar <=170){
        alert("Tu nivel de colesterol LDL es 110md/dL")
    }else if(transformar<=200 && contar==6 && edad==20){
        alert("Tu nivel de colesterol LDL es 100md/dL")
    }else if(transformar<=200 && contar==5 && edad==20){
        alert("Tu nivel de colesterol LDL es 130md/dL")
    }
}
validarClave=function(clave){
    let contar=clave.length
    if(contar>=8 && contar<=16){
        alert("Ta bien");
        return true;
    }else{
        alert("tiene que tener de 8 a 16 caracteres");
        return false;
    }
}
esMayuscula=function(caracter){
    let cadena=caracter.ChartCodeAt(0);
    if(cadena>=65 && cadena<=90){
        alert=("Efectivamente, es mayuscula")
        return true;
    }else{
        return false;
    }
}
esMinuscula=function(caracter){
    let cadena=caracter.ChartCodeAt(0);
    if(cadena>=97 && cadena<=122){
        alert=("Efectivamente, es minuscula")
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter){
    let cadena=caracter.ChartCodeAt(0);
    if(cadena>=48 && cadena<=57){
        alert=("Efectivamente, es un digito")
        return true;
    }else{
        return false;
    }
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let transformar=notaMatematica.parseFloat();
    let transformar2=notaFisica.parseFloat();
    let transformar3=notaGeometria.parseFloat();
    if(transformar>=90 || transformar2>=90 || transformar3>=90){
        alert("tienes permiso pa");
        return true;
    }else{
        return false;
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let transformar=notaMatematica.parseFloat();
    let transformar2=notaFisica.parseFloat();
    let transformar3=notaGeometria.parseFloat();
    if(transformar>90 || transformar2>90 && transformar3>80){
        alert("tienes permiso pa");
        return true;
    }else{
        return false;
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let transformar=notaMatematica.parseFloat();
    let transformar2=notaFisica.parseFloat();
    let transformar3=notaGeometria.parseFloat();
    if(transformar>90 || transformar2>90 || transformar3>90 && transformar2>transformar){
        alert("tienes permiso pa");
        return true;
    }else{
        return false;
    }
}
//Estoy canado jefe :(
