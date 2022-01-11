(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.inputEl = document.querySelector("#note-input");
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayNotes();
          });
        }
        displayNotes = () => {
          const elements = document.getElementsByClassName("note");
          while (elements.length > 0)
            elements[0].remove();
          if (this.inputEl.value) {
            this.model.addNote(this.inputEl.value);
          }
          let array = this.model.getNotes();
          for (let i = 0; i < array.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.append(array[i]);
            newDiv.className = "note";
            this.mainContainerEl.append(newDiv);
          }
        };
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  model.addNote("Buy milk");
  model.addNote("Go to the gym");
  var view = new NotesView(model);
  view.displayNotes();
  console.log("The notes app is running");
  console.log(model.getNotes());
})();
