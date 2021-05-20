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
    edit: async (req, res) => {
        await userDb.findByIdAndUpdate({_id: req.body.id},
            {$set:
                    {name: req.body.name,
                     age: req.body.age,
                     email: req.body.email,
                     password: req.body.password},
            },
            {returnOriginal: false})
            .then(() => {
                res.send({error: false, msg: "User update successful"})
            }).catch(e => {
                console.log(e)
                res.send({error: true, msg: "Wrong data", e})
            })
    },

}