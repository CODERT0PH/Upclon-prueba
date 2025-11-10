// assets-script/script.js
document.addEventListener('DOMContentLoaded', () => {

    function loadStudentData() {
        const savedStudent = JSON.parse(localStorage.getItem('student'));

        if (!savedStudent) {
        // Si no hay datos guardados, redirigimos a la página de login.
        // Esta lógica revisa si ya estamos en una subcarpeta para usar la ruta correcta.
        if (window.location.pathname.includes('assets-html')) {
            // Si la URL ya contiene 'assets-html', la ruta es directa.
            window.location.href = './login.html';
        } else {
            // Si estamos en la página principal (index.html), debemos incluir la carpeta en la ruta.
            window.location.href = './assets-html/login.html';
        }
        return; // Detenemos la ejecución para que no haya errores
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

        // Datos en tiu.html
        const tiuName = document.getElementById('tiu-name');
        const tiuCareer = document.getElementById('tiu-career');
        const tiuCampus = document.getElementById('tiu-campus');
        const tiuAvatar = document.getElementById('tiu-avatar');

        if (tiuName) tiuName.textContent = savedStudent.fullName;
        if (tiuCareer) tiuCareer.textContent = savedStudent.career;
        if (tiuCampus) tiuCampus.textContent = `📍 ${savedStudent.campus}`;
        if (tiuAvatar) tiuAvatar.src = savedStudent.profilePicture;
    }

    loadStudentData();
    
    // --- Funcionalidad para el botón "Cerrar Sesión" ---
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('student');
            alert('Has cerrado sesión.');
            // Redirige a login.html (que está en la misma carpeta que perfil.html)
            window.location.href = '../login.html';
        });
    }
});
