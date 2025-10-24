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
modificarAtributos=function(){
    let cuenta={
        numero: "09112123",
        saldo: 0.0,
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente=function(){
    let cliente={
        cedula: "1719929",
        nombre: "Fernando Rojas",
    }
let cliente2={}
cliente2.nombre="waza";
cliente2.apellido="nose";
}
probarIncrementoSaldo=function(){
    let a={
        numero: "122123",
        saldo: 100
    }
    incrementarSaldo(a,100)
    console.log(a.saldo);

}
probarDeterminarMayor=function(){
let per1={
    nombre: "Daniel",
    edad: 10 
}
let per2={
    nombre: "David",
    edad: 20
}
let mayor=determinarMayor(per1,per2)
console.log("el mayor es", mayor.nombre)
}
incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}
determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        console.log("Persona 1 es mayor");
        return persona1;
    }else if(persona1.edad<persona2.edad){
    console.log("Persona 2 es mayor");
        return persona2
    }else{
        return null;
    }
}