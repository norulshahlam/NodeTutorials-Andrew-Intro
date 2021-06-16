/*
Adding Command Options
Options are additional pieces of information passed along with the command. You can set
up options for a command using the builder property as shown below.
*/

const yargs = require("yargs");
yargs.version("1.1.0");

/*
here we have 'title' and 'body' for options ie we can set a value to it during run time: node app.js add --title="Buy" --body="Note body here"
options are required because demandOption is set to true. they
are also set up to accept string input because type is set to 'string'.
*/

//run: node app.js add --title="first title" --body="main body"
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
    console.log("title: ", argv.title);
    console.log("Body: " + argv.body);
  },
});

yargs.parse();

// below is the same as above code
// console.log(yargs.argv);
