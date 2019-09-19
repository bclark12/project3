const mongoose = require('./connection.js');

const CocktailSchema = mongoose.Schema(
    {
        name: String,
        liquor: String,
        description: String, 
    }
)

const CocktailCollection = mongoose.model('Cocktail', CocktailSchema);

const getCocktails = () => {
    return CocktailCollection.find()
}

const addCocktail = (newCocktail) => {
    return CocktailCollection.insertMany([newCocktail])
}

module.exports = {
    getCocktails,
    addCocktail,
}