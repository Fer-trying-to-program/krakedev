esNuevo=false;
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
    esNuevo=true;
}