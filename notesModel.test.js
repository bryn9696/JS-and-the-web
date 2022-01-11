const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  it("should return empty array initially", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it("can add notes and return them", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("can reset notes and return an empty array", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });

  
});
