const adminCredentials = { username: "ADMIN", password: "221099" };
const workerCredentials = { username: "trabajador", password: "unidad2024" };
let loggedUser = null;

function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if ((username === adminCredentials.username && password === adminCredentials.password) ||
        (username === workerCredentials.username && password === workerCredentials.password)) {
        loggedUser = username;
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
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
    const name = document.getElementById("patient-name").value;
    const id = document.getElementById("patient-id").value;
    const observations = document.getElementById("patient-observations").value;
    const documents = document.getElementById("patient-documents").files;
    
    if (name && id) {
        const patientList = document.getElementById("patient-list");
        const listItem = document.createElement("li");
        listItem.textContent = `Nombre: ${name}, ID: ${id}, Observaciones: ${observations}`;
        patientList.appendChild(listItem);

        // Handle document uploading here if necessary

        document.getElementById("add-patient").reset();
    }
}
