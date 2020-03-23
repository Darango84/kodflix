const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
var getFilmData = require('./GalleryDataBE');


app.get('/rest/films', (req, res) => res.send(getFilmData()));
	
app.use(express.static(path.join(__dirname, '../../build'))); // This serves the static files from the app´s build folder

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../build', 'index.html'))); // React routing for our entry point

app.listen(port, () => console.log(`Listening on port ${port}!`));