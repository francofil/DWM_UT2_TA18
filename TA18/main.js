const personas = [
  { nombre: "Juan Pérez", edad: 30 },
  { nombre: "Ana Gómez", edad: 25 },
  { nombre: "Luis Rodríguez", edad: 35 },
  { nombre: "Marta Sánchez", edad: 28 },
  { nombre: "Carlos Díaz", edad: 40 }
];

const listaPersonas = document.getElementById("personasLista");
const search = document.getElementById("search");

// Renderizar la lista de personas
personas.forEach(persona => {
  const li = `<li>${persona.nombre} - ${persona.edad} años</li>`;
  listaPersonas.innerHTML += li;
});

// Filtrar la lista mientras se escribe en el input
search.addEventListener("input", () => {
  const busqueda = search.value.toLowerCase();
  const elementosLista = document.querySelectorAll("#personasLista li");

  elementosLista.forEach(elemento => {
    const nombre = elemento.textContent.toLowerCase();
    if (nombre.includes(busqueda)) {
      elemento.style.display = ""; // Mostrar el elemento
    } else {
      elemento.style.display = "none"; // Ocultar el elemento
    }
  });
});

