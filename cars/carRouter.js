const express = require('express')
const db = require('../data/dbConfig')
const router = express.Router()

function realCar(car){
    return Boolean(car.make && car.model)
}

//get cars
router.get('/', (req, res) => {
    db("cars")
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        console.log({error})
        res.status(500).json({ message: "Cannot get data"})
    })
})


//get cars by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    db("cars").where({id})
    .first()
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "There was an error retrieving the data"})
    })
})

router.post('/', (req, res) => {
    const car = req.body
    if(realCar(car)){
        db("cars")
        .insert(car)
        .then(newCar => {
            res.status(201).json({success: `created '${car.make} ${car.model}'`})
        })
        .catch(err => {
            console.log({err})
            res.status(500).json({ message: "There was an error retrieving the data"})
        })
    }else {
        res.status(400).json({message: "Please provide VIN, make and model of the car"})
    }
    
})

router.put('/:id', (req, res) => {
    const editCar = req.body
    const {id} = req.params
    db("cars").where({id})
    .update(editCar)
    .then(car => {
        if(car > 0){
            res.status(200).json({success: ` '${editCar.make} ${editCar.model} changed'`})
        }else{
            res.status(404).json({error: "try new id"})
        }
    })
    .catch(error => {
        console.log({error})
        res.status(500).json({ message: "cannot get"})
    })
})
//delete car
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db("cars").where({id})
    .del()
    .then(car => {
        if(car > 0){
            res.status(200).json({success: `${id} was deleted`})
        }else{
            res.status(404).json({error: "try new id"})
        }
    })
    .catch(err => {
        console.log({err})
        res.status(500).json({ message: "error removing "})
    })
})



module.exports = router