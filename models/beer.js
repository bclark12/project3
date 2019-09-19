const mongoose = require('./connection.js');

const BeerSchema = mongoose.Schema(
    {
        name: String,
        type: String,
        color: String,
        description: String,
    }
)

const BeerCollection = mongoose.model('Beer', BeerSchema);

const getBeers = () => {
    return BeerCollection.find()
}

const addBeer = (newBeer) => {
    return BeerCollection.insertMany([newBeer])
}

module.exports = {
    getBeers,
    addBeer,
}