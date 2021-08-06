const router = require ('express').Router ();

const {v4: uuidv4} = require ('uuid'); //npm module to create random id numbers
const {  
  readFromFile,
  readAndAppend,
  writeToFile,
} = require ('../helpers/fsUtils');

router.get ('/notes', (req, res) => {
  readFromFile ('./db/db.json').then (data => res.json (JSON.parse (data)));
});

// POST Route for a new note
router.post ('/notes', (req, res) => {
  console.log (req.body);

  const {title, text} = req.body;

  if (req.body) {
    const newnote = {
      title,
      text,
      id: uuidv4 (),
    };

    readAndAppend (newnote, './db/db.json');
    res.json (`note added successfully 🚀`);
  } else {
    res.error ('Error in adding note');
  }
});
// DELETE Route for a specific note
router.delete ('/notes/:id', (req, res) => {
  const id = req.params.id;
  readFromFile ('./db/db.json').then (data => JSON.parse (data)).then (json => {
    // Make a new array of all notes except the one with the ID provided in the URL
    const result = json.filter (note => note.id !== id);

    // Save that array to the filesystem
    writeToFile ('./db/db.json', result);

    // Respond to the DELETE request
    res.json (`Note ${id} has been deleted 🗑️`);
  });
});

module.exports = router;
