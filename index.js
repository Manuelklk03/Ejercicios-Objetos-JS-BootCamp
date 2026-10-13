//1. Crear Coche:

const Coche = {
  marca: "Seat",
  modelo: "Ibiza",
  matricula: "1234ABC",
};

//2. Crear Casa:

const Casa = {
  codPostal: "12345",
  calle: "Calle Mayor",
  portal: "5",
  piso: "2",
};

//3. Crear FullStackDeveloper:

const FullStackDeveloper = {
  lenguajes: ["HTML", "CSS", "JS"],
  proyectos: ["Portafolio", "Digital-Fit"],
};

//4. Crear Perro:

const Perro = {
  nombre: "Firulais",
  raza: "Pastor Aleman",
  color: "Blanco",
  edad: 4,
  ladrar: function () {
    console.log("Guau guau");
  },
  popo: function () {
    return Math.random() * 3;
  },
};

//Objeto para ejercicios; 5,6,9

const Portatil = {
  marca: "HP",
  modelo: "Pavilion",
};

//5. Leer marca con punto:
const marca1 = portatil.marca;

//6. Leer marca con corchetes:
const marca2 = portatil["marca"];

//Objeto para ejercicios 7,10,11:
const Concierto = {
  grupos: ["Guns N Roses, Metallica, AC/DC"],
  cartelera: ["Guns N Roses, Metallica, AC/DC"],
  fecha: new Date("2026-10-20"),
};

//7. Obtener Array de Grupos:
const grupos = concierto.grupos;

//Objeto para ejercicios 8,25:
const Led = {
  rojo: 255,
  verde: 100,
  azul: 50,
  encendido: true,
};

//8. Guardar los tres colores en un array:
const RGB = [Led.rojo, Led.verde, Led.azul];

//9. Modificar modelo:
Portatil.modelo = "P345";

//10. Añadir un grupo a cartelera.
Concierto.cartelera.push("Black Sabbath");

//11. Cambiar fecha por actual:
Concierto.fecha = new Date(); //Fecha actual

//Objeto para ejercicios 12 y 20:
const Impresora = {
  imprimiendo: null,
  tinta: {
    rojo: 80,
    verde: 60,
    azul: 90,
  },
};

//12. Asignar objeto a imprimiendo:
Impresora.imprimiendo = {
  nombreArchivo: "Ejercicio12.pdf",
  copias: 2,
  numPaginas: 5,
};

//13. Crear Noticia:
const Noticia = {
  titular: "El titular de la noticia",
  cuerpo: "El cuerpo de la noticia",
};

//14. Crear Persona:
const Persona = {
  nombre: "Manuel",
  apellidos: "Casinos Pérez",
  edad: 23,
};

//15. Crear Avion:
const Avion = {
  numPasajeros: 150,
  despegar: function () {
    console.log("despegando");
  },
  volar: function () {
    console.log("llegando al destino");
  },
  aterrizar: function () {
    console.log("aterrizando");
  },
};

//16. Crear paquete con un array de objetos:
const Paquete = {
  contenido: [
    { nombre: "objeto1", cantidad: 10 },
    { nombre: "objeto2", cantidad: 5 },
    { nombre: "objeto3", cantidad: 17 },
  ],
};

//17. Crear Pais:
const Pais = {
  numHabitantes: 48000000,
  continente: "Europa",
  gentilicio: "español",
};

// Objeto de ejemplo para el ejercicio 18
const O_Error = {
  codigo: 404,
};

//18. Obtener el código
const codError = O_Error.codigo;
