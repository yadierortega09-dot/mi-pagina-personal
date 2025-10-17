// --- Funciones básicas de interacción --- //

// 1. Mostrar un mensaje personalizado al hacer clic
function saludar() {
  alert("¡Hola Yadier! 👋 Bienvenido a tu página interactiva.");
}

// 2. Cambiar el color de fondo
document.querySelector("body").style.backgroundColor = colorAleatorio;

function cambiarColor() {
  console.log("✅ Botón de color presionado");
  const colores = ["#3498db", "#2ecc71", "#f39c12", "#e74c3c", "#9b59b6"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}

  const colores = ["#3498db", "#2ecc71", "#f39c12", "#e74c3c", "#9b59b6"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;


// 3. Mostrar la fecha y hora actual
function mostrarFecha() {
  const fecha = new Date();
  alert(`📅 Hoy es ${fecha.toLocaleDateString()} y la hora es ${fecha.toLocaleTimeString()}`);
}
// --- Nueva función: cambiar texto principal --- //
function cambiarTexto() {
  const nuevoTexto = prompt("Escribe el nuevo título para tu página:");
  const titulo = document.getElementById("titulo");
  if (nuevoTexto) {
    titulo.textContent = nuevoTexto;
  } else {
    alert("No escribiste nada 😅");
  }
}








