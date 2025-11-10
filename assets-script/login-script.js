// assets-script/login-script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-setup-form');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const careerInput = document.getElementById('career');
    const campusInput = document.getElementById('campus');
    const profilePhotoInput = document.getElementById('profilePhoto');
    const photoPreview = document.getElementById('photoPreview');
    const errorMessage = document.getElementById('error-message');

    let base64Image = '';

    profilePhotoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                photoPreview.src = e.target.result;
                photoPreview.style.display = 'block';
                base64Image = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const career = careerInput.value.trim();
        const campus = campusInput.value.trim();

        if (!firstName || !lastName || !career || !campus) {
            errorMessage.style.display = 'block';
            return;
        }

        const studentData = {
            firstName: firstName,
            lastName: lastName,
            fullName: `${firstName.toUpperCase()} ${lastName.toUpperCase()}`,
            career: career,
            campus: campus,
            profilePicture: base64Image || '/assets-imagen' // Imagen por defecto
        };

        localStorage.setItem('student', JSON.stringify(studentData));
        window.location.href = '../index.html';
    });
});
