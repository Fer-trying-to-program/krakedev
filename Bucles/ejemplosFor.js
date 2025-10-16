mostrarNumeros=function(){
    console.log("Antes del for");
    for(let i=0;i<4;i++){
        console.log(i);

    }
    console.log("Despues del for");
}
mostrarNumeros2=function(){
    console.log("Antes del for");
    for(let indice=1;indice<=5;indice++){
        console.log(indice)

    }
    console.log("Despues del for");
}
mostrarPares=function(){
    console.log("Numeros Pares:");
    for(let pares=2;pares<=20;pares=pares+2){
        console.log(pares);
    }
    console.log("Ya")
}
mostrarInverso=function(){
    console.log("Inicio");
    for(let x=10;x>=-10;x=x-1){
    console.log(x);
    }
    console.log("fin");
}
hackearNasaPelis=function(){
    console.log('Iniciando...');
    for(let nasa=0;nasa<=100;nasa=nasa+10){
        console.log(nasa+"%")
    }
    console.log('Hackeo completo');
}
mostratImpares=function(){
    console.log("Antes for");
    for(let impar=1;impar<=21;impar=impar+2){
        console.log(impar);
    }
    console.log("Despues For");
}