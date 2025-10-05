let bulier=false;
calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;

}
centroDeComando=function(){
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3= recuperarFloat("txtNota3");
    calcular3(nota1,"lblError1");
    calcular3(nota2,"lblError2");
    calcular3(nota3,"lblError3");
    if(bulier==true){
    mostrarTexto("lblResultado","");
    }else{
    resultado = calcularPromedio(nota1, nota2, nota3);
    resultadoFormato = resultado.toFixed(2);
    mostrarTexto("lblResultado", resultadoFormato);

}
}
calcular3=function(nota,idComponente){
if(isNaN(nota)){
        mostrarTexto(idComponente,"Ingrese valor valido");
        bulier=true;
}else if(nota>=0 && nota <=10){
        mostrarTexto(idComponente,"");
}else{
        mostrarTexto(idComponente,"Ingrese un valor entre 0 y 10");
        bulier=true;   
} 
}


//calcular1 
//    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    //alert("Texto no valido");
    //}else{
        //resultado = calcularPromedio(nota1, nota2, nota3);
        //resultadoFormato = resultado.toFixed(2);
        //mostrarTexto("lblResultado", resultadoFormato);
        //alert("Todo ok") 
//Mi codigo que funcionanba : (
//calcular = function () {
    //let nota1;
   // let nota2;
    //let nota3;
   // let resultado;
   // let resultadoFormato;
   // let comprobacionErrores=false;
   // nota1 = recuperarFloat("txtNota1");
    //if(isNaN(nota1)){
   //     mostrarTexto("lblError1","Debe ingresar un numero");
  //      comprobacionErrores=true;
   // }else{
  //      mostrarTexto("lblError1","");
  //  }
  //  nota2 = recuperarFloat("txtNota2");
  //  if(isNaN(nota2)){
 //       comprobacionErrores=true;
 //       mostrarTexto("lblError2","Debe ingresar un numero");
 //   }else{
//        mostrarTexto("lblError2","");
  //  }
 //   nota3= recuperarFloat("txtNota3");
 //   if(isNaN(nota3)){
 //       comprobacionErrores=true;
    //mostrarTexto("lblError3","Debe ingresar un numero");
   // }else{
  //      mostrarTexto("lblError3","");
    
  //  }
//if(comprobacionErrores==false){
   // resultado = calcularPromedio(nota1, nota2, nota3);
   // resultadoFormato = resultado.toFixed(2);
   // mostrarTexto("lblResultado", resultadoFormato);
//}else{
    //console.log("todo mal");
//}
//}