const fs = require("fs");
const noteData = getNotes();

function getNotes() {
  var data = fs.readFileSync('./db/db.json');

  var notes = JSON.params(data);
  
  for(var i = 0; i <notes.length; i++) {
    notes[i].id = '' + i;
  }

return notes;

}

module.exports = function(app) {
  

  app.get("/api/notes", function(req, res) {
  
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {
    
    noteData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
    res.json(true);
  });

  // app.delete ("/api/notes/:id", function(req, res) {
    // const requstID = req.params.id;
    // Console.log(requestID);

  //   let note = noteData.filter(note => {
  //     return note.id === requestID;
  //     [0]});

  //     console.log(note);
  //     const index = noteData.indexOf(note);

  //     noteData.splice(index, 1);

  //     fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
  //     res.json("Note deleted");
  // });
};

  
