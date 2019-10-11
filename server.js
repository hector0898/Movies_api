const express = require('express');
const bodyParser  = require('body-parser');

const { Movie } = require('./Movie');
const { Director } = require( './Director');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/status', (req, res) => {
    res.status(200).send({ message: 'Server Ok'});
})

app.post('/movie', (req, res) => {
    const movie = req.body;
    Movie.create(movie, (err, newMovie) => {
        err
        ? res.status(409).send(err)
        : res.status(201).send(newMovie);
    });
});

app.get('/movie/:id', (req, res) => {
    const { id } = req.params
    
    Movie.findById(id)
    .then( (movie) => {
        movie
        ? res.status(200).send(movie)
        : res.status(404).send({message: "Movie not found"})
    })
    .catch((error) => res.status(409).send(error))
})

app.get('/search', (req, res) => {
    const{ title } = req.query;
    Movie.findOne({title}).exec()
    .then( (movie) => {
        movie
        ? res.status (200).send(movie)
        : res.status(404).send({message: "moves not found"})
    })
    .catch( (error) => res.status(409).send(error))
});

app.patch('/movie/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    Movie.findByIdAndUpdate(id, {$set: data}, {new: true}).exec()
    .then( (movie )=>
    movie
    ? res.status (200).send(movie)
    : res.status (400).send({message: "Movie not found"})
)
 .catch( (error) => res.status (409).send (error))
})

app.delete('/movie/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    Movie.findByIdAndUpdate(id, {$set:{isActive: false}}, {new: true}).exec()
    .then( (movie )=>
    movie
    ? res.status (200).send(movie)
    : res.status (400).send({message: "Movie not found"})
)
 .catch( (error) => res.status (409).send (error))
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})


/* Dirctor */



app.post('/director', (req, res) => {
    const director = req.body;
    Director.create(director, (err, newDirector) => {
        err
        ? res.status(409).send(err)
        : res.status(201).send(newDirector);
    });
});

app.get('/director/:id', (req, res) => {
    const { id } = req.params
    
    Director.findById(id)
    .then( (director) => {
        director
        ? res.status(200).send(director)
        : res.status(404).send({message: "Director not found"})
    })
    .catch((error) => res.status(409).send(error))
})

app.get('/search', (req, res) => {
    const{ title } = req.query;
    Director.findOne({title}).exec()
    .then( (director) => {
        director
        ? res.status (200).send(director)
        : res.status(404).send({message: "director not found"})
    })
    .catch( (error) => res.status(409).send(error))
});

app.patch('/director/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    Director.findByIdAndUpdate(id, {$set: data}, {new: true}).exec()
    .then( (director )=>
    director
    ? res.status (200).send(director)
    : res.status (400).send({message: "director not found"})
)
 .catch( (error) => res.status (409).send (error))
})

app.delete('/director/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    Director.findByIdAndUpdate(id, {$set:{isActive: false}}, {new: true}).exec()
    .then( (director )=>
    director
    ? res.status (200).send(director)
    : res.status (400).send({message: "director not found"})
)
 .catch( (error) => res.status (409).send (error))
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})