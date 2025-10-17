function saludar() {
  alert("¡Hola, Yadier! 👋 Bienvenido a tu página personal.");
}

function mostrarFecha() {
  const fecha = new Date();
  alert("Hoy es " + fecha.toLocaleDateString());
}

function cambiarColor() {
  const colores = ["#f0f0f0", "#d0f0c0", "#c0d0f0", "#f0c0d0", "#ffe4b5"];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  while (nuevoColor === colorActual) {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  }
  document.body.style.backgroundColor = nuevoColor;
}

function mostrarMensaje() {
  alert("Estás avanzando muy bien en tu formación como desarrollador 💪🚀");
}

function contacto() {
  alert("Puedes contactarme en: yadier@ejemplo.com 📧");
}








