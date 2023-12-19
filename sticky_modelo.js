const contenedor = document.getElementById("app");
const botonNota = contenedor.querySelector(".add-note");



botonNota.addEventListener("click", () => addNota());

function getNotas() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function guardarNotas(notas) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notas));
}



function addNota() {
  const notas = getNotas();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  contenedor.insertBefore(noteElement, botonNota);

  notas.push(noteObject);
  guardarNotas(notas);
}

function actualizarNota(id, newContent) {
  const notas = getNotas();
  const targetNote = notas.filter((nota) => nota.id == id)[0];

  targetNote.content = newContent;
  guardarNotas(notas);
}

function deleteNote(id, element) {
  const notas = getNotas().filter((nota) => nota.id != id);

  guardarNotas(notas);
  contenedor.removeChild(element);
}
