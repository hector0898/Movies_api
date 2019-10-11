const mongoose = require('mongoose');

const URL_MONGO = 'mongodb+srv://Mixus:josemania@cluster0-ttcdu.mongodb.net/test';

mongoose.connect(
    URL_MONGO,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (error) => {
        if (error) console.log(error);
        if (!error) console.log('Conexion exitosa');
    }
)

const Schema = mongoose.Schema;

const movieSchema = new Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },
        duration: {
            type: Number,
            default: 90
        },
        isActive: {
            type: Boolean,
            default: true
        },
    },
    {timestamps: true}
)

const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie };