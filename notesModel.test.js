const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  const model = new NotesModel();

  it("should return empty array initially", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("can add notes and return them", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("can reset notes and return an empty array", () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
