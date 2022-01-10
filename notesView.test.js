/**
 * @jest-environment jsdom
 */
const NotesModel = require ('./notesModel')
const NotesView = require ('./notesView')
const fs = require('fs');


describe('displays notes', () => {
  it('gets list of notes from the model', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    const view = new NotesView(model)
    view.displayNotes()
    expect(document.querySelectorAll(".note").length).toEqual(2)
  })
})
