document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const addPatientBtn = document.getElementById('addPatientBtn');
    const addPatientModal = document.getElementById('addPatientModal');
    const addPatientForm = document.getElementById('addPatientForm');
    const patientsListAdmin = document.getElementById('patientsListAdmin');
    const addPatientBtnWorker = document.getElementById('addPatientBtnWorker');
    const addPatientModalWorker = document.getElementById('addPatientModalWorker');
    const addPatientFormWorker = document.getElementById('addPatientFormWorker');
    const patientsListWorker = document.getElementById('patientsListWorker');
    const logoutBtns = document.querySelectorAll('#logoutBtn');
    const closeBtns = document.querySelectorAll('.close-btn');

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

    if (addPatientBtn) {
        addPatientBtn.addEventListener('click', () => {
            addPatientModal.style.display = 'flex';
        });
    }

    if (addPatientForm) {
        addPatientForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const patientName = document.getElementById('patientName').value;
            const patientId = document.getElementById('patientId').value;
            const patientObservations = document.getElementById('patientObservations').value;
            const patientDocs = document.getElementById('patientDocs').files;
            // Aquí se debería guardar la información en una base de datos
            console.log('Paciente Admin:', patientName, patientId, patientObservations, patientDocs);
            addPatientModal.style.display = 'none';
        });
    }

    if (addPatientBtnWorker) {
        addPatientBtnWorker.addEventListener('click', () => {
            addPatientModalWorker.style.display = 'flex';
        });
    }

    if (addPatientFormWorker) {
        addPatientFormWorker.addEventListener('submit', (event) => {
            event.preventDefault();
            const patientNameWorker = document.getElementById('patientNameWorker').value;
            const patientIdWorker = document.getElementById('patientIdWorker').value;
            const patientObservationsWorker = document.getElementById('patientObservationsWorker').value;
            const patientDocsWorker = document.getElementById('patientDocsWorker').files;
            // Aquí se debería guardar la información en una base de datos
            console.log('Paciente Worker:', patientNameWorker, patientIdWorker, patientObservationsWorker, patientDocsWorker);
            addPatientModalWorker.style.display = 'none';
        });
    }

    logoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirige al login
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Simular la carga de pacientes (se debería implementar en un backend real)
    if (patientsListAdmin) {
        patientsListAdmin.innerHTML = `
            <h2>Pacientes Registrados</h2>
            <ul>
                <li>Paciente 1</li>
                <li>Paciente 2</li>
            </ul>
        `;
    }

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

