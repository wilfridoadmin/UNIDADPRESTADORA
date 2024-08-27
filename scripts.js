document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const addPatientBtn = document.getElementById('addPatientBtn');
    const addPatientModal = document.getElementById('addPatientModal');
    const closeBtn = document.querySelectorAll('.close-btn');
    const addPatientForm = document.getElementById('addPatientForm');
    const patientsListAdmin = document.getElementById('patientsListAdmin');
    const addPatientBtnWorker = document.getElementById('addPatientBtnWorker');
    const addPatientModalWorker = document.getElementById('addPatientModalWorker');
    const addPatientFormWorker = document.getElementById('addPatientFormWorker');
    const patientsListWorker = document.getElementById('patientsListWorker');

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
            addPatientModalWorker.style

                <li>Paciente B</li>
            </ul>
        `;
    }
});
