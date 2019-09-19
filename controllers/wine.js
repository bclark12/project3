const express = require('express')

const wineApi = require('../models/wine.js')

wineRouter = express.Router()

wineRouter.get('/', (req, res) => {
    wineApi.getWines().then(winesInDB => {
        res.send(winesInDB)
    })
})

wineRouter.post('/', (req, res) => {
    wineApi.addWine(req.body)
    .then(() => res.send(200));
})

module.exports = {
    wineRouter
}