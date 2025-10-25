esNuevo=true;
let roles=[ {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1234567890",nombre:'Fercho',apellido:'Rojas',sueldo:550.0},];
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1234567890",nombre:'Fercho',apellido:'Rojas',sueldo:550.0},
]
mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    ocultarEmpleados();

}
mostrarOpcionRol=function(){
    
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    ocultarComponente("boton");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
mostrarEmpleados=function(){
    let idTabla=document.getElementById("tablaEmpleados");
    let tabla="<table><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>"
    let guardar;
    for(let i=0;i<empleados.length;i++){
        guardar=empleados[i];
        tabla+="<tr><td>"+guardar.cedula+"</td>"+
        "<td>"+guardar.nombre+"</td>"+
        "<td>"+guardar.apellido+"</td>"+
        "<td>"+guardar.sueldo+"</td></tr>";
    }
    tabla+="</table>";
    idTabla.innerHTML=tabla;
}
ocultarEmpleados=function(){
    ocultarComponente("txtCedula");
    ocultarComponente("txtNombre");
    ocultarComponente("txtApellido");
    ocultarComponente("txtSueldo");
    ocultarComponente("btnGuardar");
}
ejecutarNuevo=function(){
    mostrarComponente("txtCedula");
    mostrarComponente("txtNombre");
    mostrarComponente("txtApellido");
    mostrarComponente("txtSueldo");
    mostrarComponente("btnGuardar");
}
buscarEmpleado=function(cedula){
    let empleado;
    let almacenar=null;
    for(let i=0;i<empleados.length;i++){
        empleado=empleados[i];
        if(empleado.cedula==cedula){
            almacenar=empleado;
            break;
        }
    }
    return almacenar;
}
agregarEmpleado=function(empleado){
    let bulian=false;
let guardar=buscarEmpleado(empleado.cedula);
if(guardar==null){
    empleados.push(empleado);
    bulian=true;
}else{
    bulian=false;
}
return bulian;
}
guardar=function(){
    let validarEmpleado;
    let empleado;
    let char;
    let char2;
    let bulian=false;
    let txtCedula=recuperarTexto("txtCedula");
    let txtNombre=recuperarTexto("txtNombre");
    let txtApellido=recuperarTexto("txtApellido");
    let txtSueldo=recuperarFloat("txtSueldo");
    if(txtCedula.length==10 ){
        mostrarTexto("lblErrorCedula","");
    }else if(txtCedula.length!=10 || isNaN(txtCedula)){
        mostrarTexto("lblErrorCedula","La cedula debe tener 10 digitos");
        bulian=true;
    }
    for(let i=0;i<txtNombre.length;i++){
        char=txtNombre.charAt(i);
    if(txtNombre.length>=3 & char>="A"& char<="Z"){
        mostrarTexto("lblErrorNombre","");
    }
}
    if(txtNombre.length<3 || char<"A" || char>"Z"){
        mostrarTexto("lblErrorNombre","El nombre debe tener al menos 3 caracteres y todas deben ser mayusculas");
        bulian=true;
}
    for(let j=0;j<txtApellido.length;j++){
        char2=txtApellido.charAt(j);
    if(txtApellido.length>=3 & char2>="A"& char2<="Z"){
        mostrarTexto("lblErrorApellido","");
    }
}
     if(txtApellido.length<3 || char2<"A" || char2>"Z"){
        mostrarTexto("lblErrorApellido","El nombre debe tener al menos 3 caracteres y todas deben ser mayusculas");
        bulian=true;
     }
    if(txtSueldo>=400 & txtSueldo<=5000){
        mostrarTexto("lblErrorSueldo","");
    }else{
        mostrarTexto("lblErrorSueldo","El sueldo debe estar entre 400 y 5000");
        bulian=true;
    }
    if(bulian==false & esNuevo==true){
        let empleado={
        }
            empleado.cedula=txtCedula,
            empleado.nombre=txtNombre,
            empleado.apellido=txtApellido,
            empleado.sueldo=txtSueldo
            validarEmpleado=agregarEmpleado(empleado);
    }
if(esNuevo==false && bulian==false){
    let retorno=buscarEmpleado(txtCedula);
    if(retorno!=null){
        retorno.nombre=txtNombre;
        retorno.apellido=txtApellido;
        retorno.sueldo=txtSueldo;
        validarEmpleado=true;
        empleado=agregarEmpleado(retorno);
        alert("Empleado modificado correctamente");
    }
    ocultarComponente("txtCedula");
    ocultarComponente("txtNombre");
    ocultarComponente("txtApellido");
    ocultarComponente("txtSueldo");
    ocultarComponente("btnGuardar");
}
    if(validarEmpleado==true){
        alert("Empleado guardado correctamente");
        mostrarEmpleados();
        ocultarDespuesDeGuardar();
        esNuevo=false;
    }else if(validarEmpleado==undefined){
        alert("Error");
    }else{
        alert("Ya existe un empleado con esa cedula" + txtCedula);
}
    }

ocultarDespuesDeGuardar=function(){
    ocultarComponente("txtCedula");
    ocultarComponente("txtNombre");
    ocultarComponente("txtApellido");
    ocultarComponente("txtSueldo");
    ocultarComponente("btnGuardar");
}
ejecutarBusqueda=function(){
    let txtCedula=recuperarTexto("txtCedula");
    let empleadoEncontrado=buscarEmpleado(txtCedula);
    if(empleadoEncontrado==null){
        alert("No existe el empleado con esa cedula");
    }else{
        ocultarComponente("txtCedula");
        mostrarTexto("txtNombre",empleadoEncontrado.nombre);
        mostrarTexto("txtApellido",empleadoEncontrado.apellido);
        mostrarTexto("txtSueldo",empleadoEncontrado.sueldo);
    }
}
limpiar=function(){
    ocultarDespuesDeGuardar();
    esNuevo=true;
}
buscarPorRol=function(){
    let rol=recuperarTexto("txtBusquedaCedulaRol");
    let buscar=buscarEmpleado(rol);
    if(buscar==null){
        alert("No existe el empleado con esa cedula");
    }else{
        mostrarTexto("infoCedula",buscar.cedula);
        mostrarTexto("infoNombre",buscar.nombre + " " + buscar.apellido);
        mostrarTexto("infoSueldo",buscar.sueldo);
    }
}
calcularAporteEmpleado=function(sueldo){
    let aporte=sueldo*0.0945;
    return aporte;
}
calcularValorAPagar=function(sueldo,iess,descuento){

    let valorPagar=sueldo-(iess+descuento);
    return valorPagar;
}
recuperartextoDiv=function(idComponente){
    let componente;
    let retorno;
    componente=document.getElementById(idComponente);
    retorno=componente.textContent;
    return retorno;
}
recuperarFloatDiv=function(idComponente){
    let valorCaja= recuperartextoDiv(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}
recuperarIntDiv=function(idComponente){
    let valorCaja= recuperartextoDiv(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
calcularRol=function(){
    let total;
    let aporte
    let guardar=recuperarFloatDiv("infoIESS")
    let guardar1=recuperarIntDiv("infoSueldo");
    let guardar2=document.getElementById("txtDescuento");
    let valorDescuento=guardar2.value;
    let float=parseFloat(valorDescuento);
if(isNaN(float) == false & float >=0  & float <= guardar1){
aporte=calcularAporteEmpleado(guardar1);
total=calcularValorAPagar(guardar1,guardar,float);
mostrarComponente("boton");
}
mostrarTexto("infoIESS",aporte);
mostrarTexto("infoPago",total);
}
buscarRol=function(cedula){
let empleado;
    let almacenar=null;
    for(let i=0;i<empleados.length;i++){
        empleado=empleados[i];
        if(empleado.cedula==cedula){
            almacenar=empleado;
            break;
        }
    }
    return almacenar;
}
agregarRol=function(rol){
     let bulian=false;
let guardar=buscarEmpleado(rol.cedula);
if(guardar==null){
    roles.push(rol);
    bulian=true;
    alert("Rol agregado correctamente");
}else{
    bulian=false;
    alert("Ya existe un rol para ese empleado"+ rol.cedula);
}
}
calcularAporteEmpleado=function(sueldo){
    let aporte=sueldo*0.1125;
    return aporte;
}
guardarRol=function(){
    let guarda1=recuperartextoDiv("infoCedula");
    let guardar2=recuperartextoDiv("infoNombre");
    let guardar3=recuperarFloatDiv("infoSueldo");
    let guardar4=recuperarFloatDiv("infoIESS");
    let guardar5=recuperarFloatDiv("infoPago");
    let sueldo=calcularAporteEmpleado(guardar3);
    let nuevoRol={}
    nuevoRol.sueldo=guardar3;
    nuevoRol.cedula=guarda1;
    nuevoRol.nombre=guardar2;
    nuevoRol.iess=guardar4;
    nuevoRol.totalPagar=sueldo;
    agregarRol(nuevoRol);
    console.log("El rol ha sido guardado correctamente");

}
