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
