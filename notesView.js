class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes = () => {
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