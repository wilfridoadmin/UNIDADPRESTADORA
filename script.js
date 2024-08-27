const adminCredentials = { username: "ADMIN", password: "221099" };
const workerCredentials = { username: "trabajador", password: "unidad2024" };
let loggedUser = null;
let patients = [];

function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if ((username === adminCredentials.username && password === adminCredentials.password) ||
        (username === workerCredentials.username && password === workerCredentials.password)) {
        loggedUser = username;
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        renderPatientList();
    } else {
        document.getElementById("login-error").innerText = "Credenciales incorrectas";
    }
}

function logout() {
    loggedUser = null;
    document.getElementById("login-form").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function addPatient(event) {
    event.preventDefault();
    const id = document.getElementById("patient-id").value;
    const name = document.getElementById("patient-name").value;
    const observations = document.getElementById("patient-observations").value;
    const documents = document.getElementById("patient-documents").files;

    if (id && name) {
        const patient = { id, name, observations, documents: [] };
        
        // Handle document uploading
        for (let i = 0; i < documents.length; i++) {
            patient.documents.push(documents[i].name);
        }
        
        patients.push(patient);
        document.getElementById("add-patient").reset();
        renderPatientList();
    }
}

function renderPatientList() {
    const patientList = document.getElementById("patient-list");
    patientList.innerHTML = '';

    patients.forEach((patient, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            Nombre: ${patient.name}, ID: ${patient.id}, Observaciones: ${patient.observations}
            <button class="edit-btn" onclick="editPatient(${index})">Editar</button>
            <button class="delete-btn" onclick="deletePatient(${index})">Eliminar</button>
            <button class="print-btn" onclick="printObservations(${index})">Imprimir</button>
        `;
        patientList.appendChild(listItem);
    });
}

function editPatient(index) {
    const patient = patients[index];
    document.getElementById("patient-id").value = patient.id;
    document.getElementById("patient-name").value = patient.name;
    document.getElementById("patient-observations").value = patient.observations;
    // For simplicity, we'll omit handling document updates here.
    // You can enhance this functionality as needed.
    
    deletePatient(index);
}

function deletePatient(index) {
    patients.splice(index, 1);
    renderPatientList();
}

function printObservations(index) {
    const patient = patients[index];
    const printWindow = window.open('', '', 'height=600,width=800');
    
    printWindow.document.write('<html><head><title>Observaciones del Paciente</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(`<h2>Observaciones del Paciente</h2>`);
    printWindow.document.write(`<p><strong>Nombre:</strong> ${patient.name}</p>`);
    printWindow.document.write(`<p><strong>ID:</strong> ${patient.id}</p>`);
    printWindow.document.write(`<p><strong>Fecha y Hora:</strong> ${new Date().toLocaleString()}</p>`);
    printWindow.document.write(`<p><strong>Observaciones:</strong></p>`);
    printWindow.document.write(`<p>${patient.observations}</p>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}
