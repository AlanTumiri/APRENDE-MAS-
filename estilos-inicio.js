document.addEventListener("DOMContentLoaded", () => {
    cargarProgreso();
});

// 1. LEER EL PROGRESO DEL CUESTIONARIO
function cargarProgreso() {
    // Busca en la memoria del navegador si el usuario ya empezó el cuestionario de Legal
    const progresoGuardado = localStorage.getItem('ingenieria_legal_progreso');
    
    // Total de preguntas de tu cuestionario
    const totalPreguntas = 19; 
    
    let porcentaje = 0;

    if (progresoGuardado) {
        let respondidas = parseInt(progresoGuardado);
        porcentaje = Math.round((respondidas / totalPreguntas) * 100);
        if (porcentaje > 100) porcentaje = 100;
    }

    // Actualizar la interfaz gráfica
    document.getElementById('progreso-texto').innerText = `${porcentaje}% Completado`;
    
    // Animación de la barra
    setTimeout(() => {
        document.getElementById('barra-legal').style.width = `${porcentaje}%`;
    }, 300);

    if (porcentaje === 100) {
        document.getElementById('progreso-texto').innerText = "¡Materia Aprobada! 🎓";
        document.getElementById('progreso-texto').style.color = "#10b981"; 
    }
}

// 2. FUNCIONALIDAD DEL BUSCADOR
function filtrarMaterias() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let tarjetas = document.querySelectorAll('.semester-card');

    tarjetas.forEach(tarjeta => {
        let contenido = tarjeta.getAttribute('data-materias').toLowerCase();
        let titulo = tarjeta.querySelector('h3').innerText.toLowerCase();

        if (contenido.includes(input) || titulo.includes(input)) {
            tarjeta.style.display = "flex";
        } else {
            tarjeta.style.display = "none";
        }
    });
}