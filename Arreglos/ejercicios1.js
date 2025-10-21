let notas=[];
agregarElementos=function(){
    notas.push(5);
    notas.push("A");
    console.log(notas.length);
}
probarAgregar=function(){
    let a=document.getElementById("xd");
    let guardar=a.value;
    let int=parseInt(guardar);
    agregarNota(int);
}
recorrerArreglo=function(){
    let notasIndice
    for(let i=0;i<notas.length;i++){
        notasIndice=notas[i];
        console.log(notasIndice);
    }
}
agregarNota=function(nota){
    notas.push(nota);
}
ejecutarPromedio=function(){
    let txt=calcularPromedioNotas()
    let texto=document.getElementById("txtPromedio");
    texto.innerText=txt
}
calcularPromedioNotas=function(){
    let sumarNotas=0;
    let promedio=0;
    let retornar
    for(let i=0;i<notas.length;i++){
        sumarNotas=notas[i];
        promedio=promedio+sumarNotas
    }
    retornar=promedio/notas.length;
    return retornar;
}
