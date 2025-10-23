// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidad para los botones de Horarios (SOLO en index.html) ---
    const horarioButtons = document.querySelectorAll('.horarios-nav .horario-button');
    const horarioDetail = document.querySelector('.horario-detail');

    if (horarioButtons.length > 0 && horarioDetail) {
        horarioButtons.forEach(button => {
            button.addEventListener('click', () => {
                horarioButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                if (button.textContent.includes('Hoy')) {
                    horarioDetail.innerHTML = `
                        <p>15:00</p>
                        <p>16:59</p>
                        <h4>Aplicaciones Web</h4>
                        <p>NRC: 7420 Salón: UH-42</p>
                    `;
                } else if (button.textContent.includes('Mañana')) {
                    horarioDetail.innerHTML = `
                        <p>09:00</p>
                        <p>10:45</p>
                        <h4>Diseño UI/UX</h4>
                        <p>NRC: 7890 Salón: SH-10</p>
                    `;
                }
            });
        });
    }

    // --- Funcionalidad para el botón "Ver más detalle" (SOLO en index.html) ---
    const verDetalleBtn = document.getElementById('verDetalleBtn');
    if (verDetalleBtn) {
        verDetalleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Aquí se mostrarían más detalles del curso.');
        });
    }

});
