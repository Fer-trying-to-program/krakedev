probrarAtributos=function(){
    let persona={
        nombre: 'PEDRO',
        apellido: 'GONZALEZ',
        camiseta: 8,
        estaTop: true,
    }
    console.log(persona.nombre);
    console.log(persona.estaTop);
    if(persona.estaTop==false){
        console.log("Que te paso pedri?");
    }else{
        console.log("vistete pedri");
    }
}
crearProducto=function(){
    let producto1={
        nombre: "lapiz",
        precio: 2.5,
        stock: 10   ,
    }
    let producto2={
        nombre: "palancas",
        precio: 5.5,
        stock: 20,
    }
console.log(producto1.nombre);
console.log(producto2.precio);
if(producto1.stock<producto2.stock){
    console.log("Producto 2 tiene mayor stock")
}
}