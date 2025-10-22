generarAleatorios=function(){
    let aleatorios=[]
    let numeroAleatorio
    let string=transformarInt("txtUsuario");
    if(string>=5 && string<=20){
        for(let i=0;i<string;i++){
            numeroAleatorio=generarNumero();
            aleatorios.push(numeroAleatorio);
            console.log(i);
        }
    }else{
        alert("Ingrese un numero entre 5 y 20");
    }
    mostrarResultados(aleatorios);
    }
generarNumero=function(){
    let numeroAleatorio=Math.random()*100;
    let freefire=numeroAleatorio.toFixed(0);
    console.log(freefire);
    return freefire;
}
mostrarResultados=function(arregloNumeros){
    let idTabla=document.getElementById("tabla");
    let generarTabla="<table><tr><th>Numeros Aleatorios<th/><tr/>"
    let guardarNumero;
    for(let i=0;i<arregloNumeros.length;i++){
        guardarNumero=arregloNumeros[i];
        generarTabla+="<tr><td>";
        generarTabla+=guardarNumero;
        generarTabla+="<tr/><td/>";
    }
    generarTabla+="<table/>"
    idTabla.innerHTML=generarTabla;
}