/*
export multiple modules by using object.

now we will integrate the yarg command with the json file creation.

using the title & body arg, we will pass this value thru addNote().
addNote() is imported from note.js. from here the arg is stored into obj & coverted to json
then it will add to the json file

to add data, run:  node app.js add --title="ikan" --body="b"
then change the value of title and vbody

we also add a checking feature to add only unique title

we also have remove functio with checking if inpuit title exisits:

node app.js remove --title="ikan"
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
  handler: function (argv) {
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
  handler: function (argv) {
    notes.removeNote(argv.title, argv.body);
  },
});

yargs.parse();
 