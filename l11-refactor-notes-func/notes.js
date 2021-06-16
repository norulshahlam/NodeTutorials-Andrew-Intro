const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  // const notesToKeep = notes.filter(function (note) {
  //   return note.title !== title;
  // });

  if (notes.length > notesToKeep.length) {
    console.log("note removed");
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("note not found"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.find((note) => note.title === title);

  // const duplicateNotes = notes.filter((note) => note.title === title);

  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("new note added!");
  } else {
    console.log(chalk.red.inverse("note taken!"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(note);
  } else {
    console.log(chalk.red.inverse("note not found"));
  }
};

const saveNotes = (notes) => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
};
