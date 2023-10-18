const { json } = require('express')
const user = require('../models/usuario')

exports.CreateUser = async (req, res) => {
    try {
        let UsersList
        UsersList = new user(req.body)
        await UsersList.save()
        res.send(UsersList)
    } catch (error) {
        console.log(error)
        res.status(502).send("Unable to create the user, contact the System Admin")
    }
}

exports.GetAllUsers = async (req, res) => {
    try {
        let UsersData = await user.find()
        res.json(UsersData)
    } catch (error) {
        console.log(error)
        res.status(502).send("Unable to get the requested data, please reach the system admin")
    }
}

exports.GetSingleUser = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const UserData = await user.findById(req.params.id)
            if (!UserData) {
                res.status(404).send("User not found")

            } else {
                res.json(UserData)
            }

        }
        else {
            res.status(418).send("User not found.")
        }
    } catch (let) {

    }
}


exports.UpdateSingleUser = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const UserData = await user.findById(req.params.id)
            if (!UserData) {
                res.status(404).send('User not found')
            } else {
                const { First_Name, Last_Name, Email, Password } = req.body
                UserData.First_Name = First_Name
                UserData.Last_Name = Last_Name
                UserData.Email = Email
                UserData.Password = Password
                let updatedDoc = await user.findOneAndUpdate({ _id: req.params.id }, UserData)
                res.json(updatedDoc)
            }

        } else {
            res.status(418).send("Invalid Id")
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Contact the system Administrator')
    }
}


exports.DeleteSingleUser = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const UserData = await user.findById(req.params.id)
            if (!UserData) {
                res.status(404).send('Id not found')
                return
            }
            await user.findOneAndRemove({ _id: req.params.id })
            res.send("User deleted!")
        }
        else {
            res.status(418).send("Invalid Id")
        }
    } catch (error) {
        console.log(error)
        res.status(502).send("Reach the system Admin")
    }
}
