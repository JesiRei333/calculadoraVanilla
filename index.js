const pantalla = document.querySelector('.pantallaConsola')
const botones = document.querySelectorAll('.btn') //generando array de btns


//document.addEventListener("keydown", function(event) {
//
 // if (event.key ) {
  //  let dato= event.key
  //console.log (event.key)
 // pantalla.textContent=dato
 // }
//});



botones.forEach (btnBoton => {
pantalla.textContent= 0
btnBoton.addEventListener("click", () => { //add listener cada btn
 
  const botonAdd= btnBoton.textContent //guardar el contenido btn
  const reiniciar= 0



  if(btnBoton.id === "c" ){
    pantalla.textContent = reiniciar
    return; //termina fundion  haciendo que no se ejecute lo demas
  }

  if (btnBoton.id === "flecha"){

    if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
        pantalla.textContent = reiniciar //si el tamaño ya es uno y quiero borrar le doy el valor de "0" para que no se quede vacío
        
    } else {
    pantalla.textContent = pantalla.textContent.slice (0, -1)  // 1ra posicion de donde arranca, segunda posicion donde termina, como quiero que termine de la ultima uso -1, ya que no se donde terminara cada vez
    }

    return; 
  }

  if (btnBoton.id === "igual"){
    try {

        pantalla.textContent = eval(pantalla.textContent) //recibe una cadena de strings y evalua las operaciones math para realizar//
        
    } catch {
        pantalla.textContent = "Error"
    }
      return;
}


  if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
  pantalla.textContent = botonAdd //add valor del boton reemplazando el cero
  }else{
  pantalla.textContent += botonAdd //add el valor que ya esta en pantalla  mas el del boton
  }

})
})

