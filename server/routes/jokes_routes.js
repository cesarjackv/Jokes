const JokeController = require('../controllers/jokes_controller');

module.exports = app => {
    app.get('/api/Jokes', JokeController.findAllJokes);
    app.get('/api/Jokes/:id', JokeController.findOneJoke);
    app.put('/api/Jokes/:id', JokeController.updateJoke);
    app.post('/api/Jokes', JokeController.createNewJoke);
    app.delete('/api/Jokes/:id', JokeController.deleteJoke);
}
