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
