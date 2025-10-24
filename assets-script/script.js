// assets-script/script.js
document.addEventListener('DOMContentLoaded', () => {

    function loadStudentData() {
        const savedStudent = JSON.parse(localStorage.getItem('student'));

        if (!savedStudent) {
            // Si la página actual no es login.html, redirige.
            if (!window.location.pathname.includes('login.html')) {
                // La ruta correcta depende de dónde estás.
                if (window.location.pathname.includes('assets-html')) {
                    window.location.href = '../login.html';
                } else {
                    window.location.href = '../assets-html/login.html';
                }
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
