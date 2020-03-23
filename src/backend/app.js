const express = require('express');
const app = express();
const port = 3001;
var getFilmData = require('./GalleryDataBE');


app.get('/rest/films', (req, res) => res.send(getFilmData()));

app.listen(port, () => console.log(`Listening on port ${port}!`));


