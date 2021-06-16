/*

refactor all functions using es6 or arrow

use find() to replace fitler to find duplciate notes
***********************************************

to add data, run:  node app.js add --title="ikan" --body="b"
then change the value of title and vbody

to remove data, run: node app.js remove --title="ikan"

to load all data, run: node app.js get

to read 1 note run: node app.js read --title="ikan"
*/

const yargs = require("yargs");
yargs.version("1.1.0");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "get",
  describe: "Add a new note",

  handler() {
    notes.getNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
