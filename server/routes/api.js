const express = require('express')
const router = express.Router()
const Favourite = require('../models/Favourite')

router.get('/favourites',function(req,res){
    Favourite.find({}).exec(function(error,result){
        res.send(result)
    })
})

router.get('/favourites/:id',function(req,res){
    Favourite.find({}).exec(function(error,result){
        res.send(result)
    })
})

router.post('/favourites',function(req,res){
    let newFavourite = new Favourite(req.body)
    newFavourite.save()
    res.status(201).send()
})

router.delete('/favourites',function(req,res){
    let {id} = req.body
    Favourite.findByIdAndDelete(id, function (err, result) {
        err !== null ?  res.status(404).send() :  res.send()
    })
})



module.exports = router