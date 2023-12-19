function createNoteElement(id, content) {
    const element = document.createElement("textarea");
  
    element.classList.add("note");
    element.value = content;
    element.placeholder = "Introduce algo...";
  
    element.addEventListener("change", () => {
        actualizarNota(id, element.value);
    });
  
    element.addEventListener("dblclick", () => {
        deleteNote(id, element);
    });
  
    return element;
  }

  getNotas().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    contenedor.insertBefore(noteElement, botonNota);
  });