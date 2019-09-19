const mongoose = require('./connection.js');

const WineSchema = mongoose.Schema(
    {
        name: String,
        type: String,
        year: Number,
        description: String,
    }
);

const WineCollection = mongoose.model('Wine', WineSchema);

const getWines = () => {
    return WineCollection.find()
}

const addWine = (newWine) => {
    return WineCollection.insertMany([newWine])
}

module.exports = {
    getWines,
    addWine,
}
