const userDb = require('../schemas/Schema')

module.exports = {
    uploadUser: async (req, res) => {
        let newUser = new userDb
        newUser.name = req.body.name
        newUser.age = req.body.age
        newUser.email = req.body.email
        newUser.password = req.body.password
        newUser.save().then(() => {
            res.send({error: false, message: 'Vartotojas įkeltas!'})
        }).catch(e => {
            res.send({error: true, message: e})
        })
    },
    showAllUsers: async (req, res) => {
        let allUsers = await userDb.find()
        res.send(allUsers)
    },
    delete: async (req, res) => {
        await userDb.findOneAndDelete({_id: req.params.id})
        let allUsers = await userDb.find()
        res.send({error: false, users: allUsers, message: "Vartotojas ištrintas!"})
    },
    find: async (req, res) => {
        let user = await userDb.findById({_id: req.params.id})
        res.send({error: false, findUser: user})
    },
    //
    // add: async (req, res) => {
    //     let item = await itemDb.find({_id: req.params.id})
    //     let quantity = item[0].quantity + 1
    //     await itemDb.findByIdAndUpdate({_id: req.params.id}, {
    //         quantity: quantity
    //     })
    //     res.send({error: false, message: 'update!'})
    // },


}