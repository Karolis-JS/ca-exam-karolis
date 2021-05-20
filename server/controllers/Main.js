const itemDb = require('../schemas/Schema')

module.exports = {
    uploadItem: async (req, res) => {
        let newItem = new itemDb
        newItem.name = req.body.name
        newItem.quantity = req.body.quantity
        newItem.price = req.body.price
        newItem.save().then(() => {
            res.send({error: false, message: 'Item uploaded!'})
        }).catch(e => {
            res.send({error: true, message: e})
        })
    },
    showAllItems: async (req, res) => {
        let allItems = await itemDb.find()
        res.send(allItems)
    },

    add: async (req, res) => {
        let item = await itemDb.find({_id: req.params.id})
        let quantity = item[0].quantity + 1
        await itemDb.findByIdAndUpdate({_id: req.params.id}, {
            quantity: quantity
        })
        res.send({error: false, message: 'update!'})
    },
    delete: async (req, res) => {
        await itemDb.findOneAndDelete({_id: req.params.id})
        res.send({error: false, message: "Produktas ištrintas!"})
    },

}