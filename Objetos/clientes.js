let clientes=[
    {cedula: "12123123", nombre: 'David', edad: 20},
    {cedula: "12314121", nombre: "Douglas", edad: 15},
    {cedula: "17881819", nombre: "cholo", edad: 50},
]
modificarCambio=function(){
     let guardar1=recuperarTexto("txtCedula");
    let guardar2=recuperarTexto("txtNombre");
    let guardar3=transformarFloat("txtEdad");
    let datosCliente={}
    datosCliente.cedula=guardar1;
    datosCliente.nombre=guardar2;
    datosCliente.edad=guardar3;
    modificarCliente(datosCliente);
    mostrarClientes();
}
modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre
        clienteEncontrado.edad=cliente.edad
    }
}
ejecutarBusqueda=function(){
    let guardar1=recuperarTexto("txtCedulaBuscar");
    let cedulaCliente=buscarCliente(guardar1);
    if(cedulaCliente==null){
        alert("No existe la cedula");
    }else{
        mostrarTextoEnCaja("txtCedula",cedulaCliente.cedula);
        mostrarTextoEnCaja("txtNombre",cedulaCliente.nombre);
        mostrarTextoEnCaja("txtEdad",cedulaCliente.edad);
    }
}

crearCliente=function(){
    let guardar1=recuperarTexto("txtCedula");
    let guardar2=recuperarTexto("txtNombre");
    let guardar3=transformarFloat("txtEdad");
    let nuevoCliente={}
    nuevoCliente.cedula=guardar1;
    nuevoCliente.nombre=guardar2;
    nuevoCliente.edad=guardar3;
    agregarCliente(nuevoCliente);
}
agregarCliente=function(cliente){
    let resultado=buscarCliente(cliente.cedula)
    if(resultado==null){
    clientes.push(cliente)
}else{
    alert("Ya existe un cliente con esa cedula"+ cliente.cedula)
}
}
buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(let i=0;i<clientes.length;i++){
    elementoCliente=clientes[i];
    if(elementoCliente.cedula==cedula){
        clienteEncontrado=elementoCliente;
        break;
    }
}
return clienteEncontrado;
}
mostrarClientes=function(){
    let idTabla=document.getElementById("tabla");
    let tabla="<table><tr><th>Participante numero 1</th>"+
    "<th>Participante numero 2</th>"+"<th>Participante numero 3</th></tr>"
    let cliente;
    for(let i=0;i<clientes.length;i++){
        cliente=clientes[i];
        tabla+="<tr><td>"+cliente.cedula+"</td>"+
        "<td>"+cliente.nombre+"</td>"+
        "<td>"+cliente.edad+"</td>"+"</tr>"
    }
    tabla+="</table>"
    idTabla.innerHTML=tabla;
}