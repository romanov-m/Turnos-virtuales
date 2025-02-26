// Función para generar un nombre aleatorio
function generateRandomName() {
    const nombres = ["Juan", "María", "Carlos", "Ana", "Luis", "Sofía", "Diego", "Laura", "Pedro", "Isabel"];
    const apellidos = ["García", "Martínez", "Rodríguez", "Fernández", "López", "González", "Pérez", "Sánchez", "Ramírez", "Torres"];
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    return `${nombre} ${apellido}`;
}

// Función para generar un correo electrónico basado en el nombre
function generateRandomEmail(nombre) {
    const dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
    const partesNombre = nombre.toLowerCase().split(" ");
    const dominio = dominios[Math.floor(Math.random() * dominios.length)];
    return `${partesNombre[0]}.${partesNombre[1]}@${dominio}`;
}

// Función para generar un DNI aleatorio (9 dígitos numéricos)
function generateRandomDNI() {
    // Generar un número aleatorio entre 100000000 y 999999999
    const numero = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
    return numero.toString(); // Convertir a cadena para mantener el formato
}

// Función para generar una edad aleatoria (mayor de edad)
function generateRandomAge() {
    return Math.floor(Math.random() * (80 - 18 + 1)) + 18; // Edad entre 18 y 80 años
}

// Generar 100 clientes
const clientes = [];
for (let i = 0; i < 100; i++) {
    const nombre = generateRandomName();
    const cliente = {
        DNI: generateRandomDNI(),
        NOMBRE: nombre,
        CORREO: generateRandomEmail(nombre),
        EDAD: generateRandomAge()
    };
    clientes.push(cliente);
}

// Convertir a JSON
const clientesJSON = JSON.stringify(clientes, null, 2);

// Guardar en un archivo (usando Node.js)
// Para ejecutar esto en Git Bash, asegúrate de tener Node.js instalado
const fs = require('fs');
fs.writeFileSync('clientes.json', clientesJSON);
console.log("Archivo 'clientes.json' creado con éxito.");

// Mostrar el JSON en la consola
console.log(clientesJSON);