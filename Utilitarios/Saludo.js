saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=transformarInt("txtEdad");
    let estatura=transformarFloat("txtEstatura");
    mostrarTexto("resultado","hola, "+" "+nombre+" "+apellido);
    mostrarImagen("img","./Imagenes/baldi-playtime.gif");
    mostrarTextoEnCaja("txtNombre","");
}
