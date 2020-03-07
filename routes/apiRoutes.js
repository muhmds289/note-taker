const fs = require("fs");
const noteData = getNotes();

function getNotes() {
  let data = fs.readFileSync('./db/db.json');

  let notes = JSON.parse(data);

  for (let i = 0; i < notes.length; i++) {
    notes[i].id = '' + i;
  }

  return notes;

}

module.exports = function (app) {


  app.get("/api/notes", function (req, res) {

    res.json(noteData);
  });

  app.post("/api/notes", function (req, res) {

    noteData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
    res.json(true);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const requestID = req.params.id;
    console.log(requestID);

    let note = notesData.filter(note => {
      return note.id === requestID;
    })[0];

    console.log(note);
    const index = notesData.indexOf(note);

    notesData.splice(index, 1);

    fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
    res.json("Note deleted");
  });
};