const express = require('express')

const beerApi = require('../models/beer.js')

beerRouter = express.Router()

beerRouter.get('/', (req, res) => {
    beerApi.getBeers().then(beersInDB => {
        res.send(beersInDB)
    })
})

beerRouter.post('/', (req, res) => {
    beerApi.addBeer(req.body)
    .then(() => res.send(200));
})

module.exports = {
    beerRouter
}