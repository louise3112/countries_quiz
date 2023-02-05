import express from 'express'
import {ObjectId} from 'mongodb'

export const createRouter = function(collection) {
    
    const router = express.Router()

    // INDEX
    router.get('/', (req, res) => {
        collection.find().toArray()
            .then((documents) => res.json(documents))
            .catch(error => {
                console.error(error)
                res.status(500)
                res.json({status:500, error:error})
            })
    })

    // SHOW
    router.get('/:id', (req, res) => {
        const idToShow = req.params.id
        collection.findOne({_id: new ObjectId(idToShow)})
            .then((document) => res.json(document))
            .catch(error => {
                console.error(error)
                res.status(500)
                res.json({status:500, error:error})
            })
    })

    // CREATE
    router.post('/', (req, res) => {
        const newData = req.body
        collection.insertOne(newData)
            .then(result => res.json(result.insertedId))
            .catch(err => {
                console.error(err)
                res.status(500)
                res.json({status: 500, error: err})
            })
    })

    // UPDATE
    router.put('/:id', (req, res) => {
        const idToUpdate = req.params.id
        const updatedData = req.body
        delete updatedData._id
        collection.updateOne({_id: new ObjectId(idToUpdate)}, {$set: updatedData})
            .then(result => res.json(result))
            .catch(err => {
                console.error(err)
                res.status(500)
                res.json({status: 500, error: err})
            })
    })


    // DESTROY
    router.delete('/:id', (req, res) => {
        const idToDelete = req.params.id
        collection.deleteOne({_id: new ObjectId(idToDelete)})
            .then(result => res.json(result))
            .catch(err => {
                console.error(err)
                res.status(500)
                res.json({status: 500, error: err})
            })
    })

    return router
}
