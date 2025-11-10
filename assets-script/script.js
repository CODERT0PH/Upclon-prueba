// assets-script/script.js
document.addEventListener('DOMContentLoaded', () => {
    
    function loadStudentData() {
        const savedStudent = JSON.parse(localStorage.getItem('student'));
        if (!savedStudent) {
            if (window.location.pathname.includes('assets-html')) {
                window.location.href = './login.html';
            } else {
                window.location.href = './assets-html/login.html';
            }
            return;
        }

        // --- Actualizar datos dinámicamente ---
        
        // Saludo en index.html
        const welcomeName = document.getElementById('welcome-name');
        if (welcomeName) welcomeName.textContent = `Hola, ${savedStudent.firstName}...`;

        // Datos en perfil.html
        const profileName = document.getElementById('profile-name');
        const profileCareer = document.getElementById('profile-career');
        const profileCampus = document.getElementById('profile-campus');
        const profilePic = document.getElementById('profile-pic');
        
        if (profileName) profileName.textContent = savedStudent.fullName;
        if (profileCareer) profileCareer.textContent = savedStudent.career;
        if (profileCampus) profileCampus.textContent = `📍 ${savedStudent.campus}`;
        if (profilePic) profilePic.src = savedStudent.profilePicture;

        // Datos en tiu.html (AHORA INCLUYE EL AVATAR)
        const tiuName = document.getElementById('tiu-name');
        const tiuCareer = document.getElementById('tiu-career');
        const tiuCampus = document.getElementById('tiu-campus');
        const tiuAvatar = document.getElementById('tiu-avatar'); // Referencia al nuevo avatar

        if (tiuName) tiuName.textContent = savedStudent.fullName;
        if (tiuCareer) tiuCareer.textContent = savedStudent.career;
        if (tiuCampus) tiuCampus.textContent = `📍 ${savedStudent.campus}`;
        if (tiuAvatar) tiuAvatar.src = savedStudent.profilePicture; // Asigna la imagen de perfil
    }

    loadStudentData();
    
    // --- Funcionalidad para el botón "Cerrar Sesión" ---
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('student');
            alert('Has cerrado sesión.');
            window.location.href = './login.html'; 
        });
    }

    // --- Funcionalidad para los botones de Horarios (SOLO en index.html) ---
    const horarioButtons = document.querySelectorAll('.horarios-nav .horario-button');
    if (horarioButtons.length > 0) {
        // ... (Tu código de horarios, que estaba bien, iría aquí si no estuviera ya en el HTML)
    }

    // --- Funcionalidad para el botón "Ver más detalle" (SOLO en index.html) ---
    const verDetalleBtn = document.getElementById('verDetalleBtn');
    if (verDetalleBtn) {
        verDetalleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Aquí se mostrarían más detalles del curso.');
        });
    }

    // --- Manejo de la navegación inferior (resaltado de activo) ---
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => {
        // Comprueba si el final del href coincide con el final de la URL
        if (window.location.href.endsWith(item.getAttribute('href').replace('./', ''))) {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }
    });

});