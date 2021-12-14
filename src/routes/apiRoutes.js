const express = require('express');
const router = express.Router();
const genresController = require('../controllers/apis/apiGenresController');
const actorsController = require('../controllers/apis/apiActorsController');

// Genres
router.get('/genres', genresController.getAllGenres);
router.get('/genres/:id', genresController.getOneGenre);

// Actors
router.get('/actors', actorsController.getAllActors);
router.get('/actors/:id', actorsController.getOneActor);
router.post('/actors/create', actorsController.create);
router.put('/actors/update/:id', actorsController.update);
router.delete('/actors/delete/:id', actorsController.delete);

module.exports = router;