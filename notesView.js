class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#note-input');
    this.buttonEl = document.querySelector('#add-note-button');
    this.buttonEl.addEventListener('click', () =>  { 
      this.displayNotes()})
  }

  displayNotes = () => {
    const elements = document.getElementsByClassName("note");
    while (elements.length > 0) elements[0].remove();

    if(this.inputEl.value) {
    this.model.addNote(this.inputEl.value) }
    let array = this.model.getNotes()
    for (let i = 0; i<array.length; i++) {
      let newDiv = document.createElement('div')
      newDiv.append(array[i]);
      newDiv.className = "note"
      this.mainContainerEl.append(newDiv)
    }

    }
  }


module.exports = NotesView;