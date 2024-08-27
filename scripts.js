document.addEventListener('DOMContentLoaded', () => {
    // Simula el login y redirige según el rol
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'ADMIN' && password === '221099') {
                window.location.href = 'admin.html';
            } else if (username === 'trabajador' && password === 'unidad2024') {
                window.location.href = 'worker.html';
            } else {
                document.getElementById('error-message').innerText = 'Credenciales incorrectas';
            }
        });
    }

    // Mostrar el modal para agregar paciente
    const addPatientBtn = document.getElementById('addPatientBtn');
    const addPatientModal = document.getElementById('addPatientModal');
    const closeBtn = document.querySelector('.close-btn');
    const addPatientForm = document.getElementById('addPatientForm');

    if (addPatientBtn) {
        addPatientBtn.addEventListener('click', () => {
            addPatientModal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            addPatientModal.style.display = 'none';
        });
    }

    if (addPatientForm) {
        addPatientForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const patientName = document.getElementById('patientName').value;
            const patientId = document.getElementById('patientId').value;
            const patientDocs = document.getElementById('patientDocs').files;
            // Aquí se debe guardar la información en una base de datos o en el almacenamiento del servidor
            console.log('Paciente:', patientName, patientId, patientDocs);
            addPatientModal.style.display = 'none';
        });
    }

    // Simula la carga de pacientes
    const patientsListAdmin = document.getElementById('patientsList');
    if (patientsListAdmin) {
        patientsListAdmin.innerHTML = `
            <h2>Pacientes Registrados</h2>
            <ul>
                <li>Paciente 1</li>
                <li>Paciente 2</li>
            </ul>
        `;
    }

    const patientsListWorker = document.getElementById('patientsListWorker');
    if (patientsListWorker) {
        patientsListWorker.innerHTML = `
            <h2>Pacientes Asignados</h2>
            <ul>
                <li>Paciente A</li>
                <li>Paciente B</li>
            </ul>
        `;
    }
});
