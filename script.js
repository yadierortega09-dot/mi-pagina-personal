function mostrarSaludoPersonalizado() {
  let nombre = prompt("¿Cómo te llamas?");
  let hora = new Date().getHours();

  if (nombre) {
    if (hora < 12) {
      alert("Buenos días, " + nombre + " ☀️");
    } else if (hora < 18) {
      alert("Buenas tardes, " + nombre + " 🌤️");
    } else {
      alert("Buenas noches, " + nombre + " 🌙");
    }
  } else {
    alert("No ingresaste tu nombre 😅");
  }
}
let zona = document.getElementById("zona");

zona.onmouseover = function() {
  zona.style.backgroundColor = "lightblue";
  zona.textContent = "¡Estás encima! 😎";
};

zona.onmouseout = function() {
  zona.style.backgroundColor = "lightgray";
  zona.textContent = "Pasa el ratón por aquí 👇";
};
function saludar() {
  let nombre = document.getElementById("nombre").value;
  if (nombre.trim() === "") {
    alert("Por favor, escribe tu nombre 😊");
  } else {
    alert("¡Hola " + nombre + "! Bienvenido a mi página 💻");
  }
}

