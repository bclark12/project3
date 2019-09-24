const express = require('express')

const cocktailApi = require('../models/cocktail.js')

cocktailRouter = express.Router()

cocktailRouter.get('/', (req, res) => {
    cocktailApi.getCocktails().then(cocktailsInDB => {
        res.send(cocktailsInDB)
    })
})

cocktailRouter.post('/', (req, res) => {
    cocktailApi.addCocktail(req.body)
    .then(() => res.send(200));
})

module.exports = {
    cocktailRouter
}
