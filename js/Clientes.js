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

// Función para generar un DNI aleatorio (8 dígitos numéricos)
function generateRandomDNI() {
    // Generar un número aleatorio entre 10000000 y 99999999
    const numero = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    return numero.toString(); // Convertir a cadena para mantener el formato
}

// Función para generar una edad aleatoria (mayor de edad)
function generateRandomAge() {
    return Math.floor(Math.random() * (80 - 18 + 1)) + 18; // Edad entre 18 y 80 años
}

// Función para generar una persona
function generatePerson() {
    const nombre = generateRandomName();
    return {
        DNI: generateRandomDNI(),
        NOMBRE: nombre,
        CORREO: generateRandomEmail(nombre),
        EDAD: generateRandomAge()
    };
}

// Generar 100 clientes y 100 no clientes
const baseDeDatos = {
    clientes: [],
    noClientes: []
};

for (let i = 0; i < 100; i++) {
    baseDeDatos.clientes.push(generatePerson());
    baseDeDatos.noClientes.push(generatePerson());
}

// Convertir a JSON
const baseDeDatosJSON = JSON.stringify(baseDeDatos, null, 2);

// Guardar en un archivo (usando Node.js)
// Para ejecutar esto en Git Bash, asegúrate de tener Node.js instalado
const fs = require('fs');
fs.writeFileSync('base_de_datos.json', baseDeDatosJSON);
console.log("Archivo 'base_de_datos.json' creado con éxito.");

// Mostrar el JSON en la consola
console.log(baseDeDatosJSON);