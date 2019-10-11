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

const DirectorSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            default: 18
        },
        isActive: {
            type: Boolean,
            default: true
        },
    },
    {timestamps: true}
)

const Director = mongoose.model('Director', DirectorSchema);

module.exports = { Director };