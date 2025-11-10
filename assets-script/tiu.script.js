// assets-script/tiu.script.js
// Nueva lógica para el reloj
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Nos aseguramos de que el elemento exista antes de actualizar
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) {
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Nos aseguramos de que el elemento exista
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = `${dayName}, ${day} ${monthName} ${year}`;
    }
}

// Inicia el reloj solo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateClock, 1000);
    updateClock(); // Llama una vez para evitar el retraso
});