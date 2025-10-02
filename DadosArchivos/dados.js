let Lanzamientos=5;
let Puntaje=0;
jugar=function(){
   let guardar=lanzarDado();  
   cambiarTexto("lblNumero",guardar);
   if(guardar>3){
        cambiarTexto("txtIf","Es mayor a 3, ganaste");
   }else{
        cambiarTexto("txtIf","Es menor a 3, perdiste");

   }
}
lanzarDado=function(){
    let guardar
    let numeroMultiplicado
    let float
    guardar=Math.random();
    numeroMultiplicado=guardar*7;
    float=parseInt(numeroMultiplicado);
    console.log(float);
    return float;
}