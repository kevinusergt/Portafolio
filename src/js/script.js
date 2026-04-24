// Espera a que toda la página cargue completamente
window.addEventListener("load", function() {
    // Muestra una alerta de bienvenida
    alert("Welcome to my portfolio 🚀");
});


// Selecciona el botón que cambia el texto
const changeBtn = document.getElementById("changeTextBtn");

// Selecciona el texto original
const aboutText = document.getElementById("about-text");

// Selecciona el texto alternativo
const textChanged = document.getElementById("textChanged");

// Evento cuando se hace clic en el botón
changeBtn.addEventListener("click", function() {

    // Verifica cuál texto está visible
    if (aboutText.style.display === "block") {

        // Oculta el texto original
        aboutText.style.display = "none";

        // Muestra el texto alternativo
        textChanged.style.display = "block";

        // Cambia el texto del botón
        changeBtn.textContent = "Reset Text";

    } else {

        // Muestra el texto original
        aboutText.style.display = "block";

        // Oculta el texto alternativo
        textChanged.style.display = "none";

        // Restaura el texto del botón
        changeBtn.textContent = "Change Text";
    }
});


// Selecciona el botón de mostrar/ocultar texto extra
const toggleBtn = document.getElementById("toggleBtn");

// Selecciona el texto adicional
const extraText = document.getElementById("extraText");

// Evento al hacer clic en el botón
toggleBtn.addEventListener("click", function() {

    // Verifica si el texto está oculto
    if (extraText.style.display === "none") {

        // Muestra el texto
        extraText.style.display = "block";

        // Cambia el texto del botón
        toggleBtn.textContent = "Hide";

    } else {

        // Oculta el texto
        extraText.style.display = "none";

        // Cambia el texto del botón
        toggleBtn.textContent = "Show More";
    }
});