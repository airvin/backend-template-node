import User from '../models/user'

export const createUser = (req, res) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })

    user.save(err => {
        if (err) {
            res.send(err)
        }
        console.log("User ", req.body.firstName, " ", req.body.lastName, " created")
        res.json({ message: "New user created." })
    })
}

export const getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err)
        }
        res.json(users)
    })
}
