document.addEventListener('DOMContentLoaded', () => {

    const clockElement = document.getElementById('digital-clock');
    const dateElement = document.getElementById('current-date');
    const timeZone = 'America/Lima'; // Zona horaria de Perú

    // Función para actualizar el reloj (sin cambios)
    function updateClock() {
        const now = new Date();
        const timeOptions = {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        };
        clockElement.textContent = now.toLocaleTimeString('es-ES', timeOptions);
    }

    // --- FUNCIÓN DE FECHA MEJORADA Y A PRUEBA DE ERRORES ---
    function updateDate() {
        const now = new Date();

        // 1. Obtenemos cada parte de la fecha por separado
        const weekday = now.toLocaleDateString('es-ES', { weekday: 'long', timeZone });
        const day = now.getDate();
        const month = now.toLocaleDateString('es-ES', { month: 'short', timeZone });
        const year = now.getFullYear();

        // 2. Formateamos las partes como las necesitamos
        const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
        const capitalizedMonth = month.toUpperCase().replace('.', ''); // "oct." -> "OCT"

        // 3. Unimos todo en el formato exacto que quieres
        const finalDate = `${capitalizedWeekday}, ${day} ${capitalizedMonth} ${year}`;
        
        // 4. Asignamos el resultado
        dateElement.textContent = finalDate;
    }

    // Ejecución y actualización
    updateDate();
    updateClock(); 
    setInterval(updateClock, 1000); 
});
