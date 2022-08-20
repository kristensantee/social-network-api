const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .populate('thoughts')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ msg: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ msg: 'No user with this ID' })    
                    : res.json(user)
            )
        .catch((err) => res.status(500).json(err))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ msg: 'No user with that ID' })
                    : User.findOneAndUpdate(
                        { users: req.params.userId },
                        { $pull: { users: req.params.userId }},
                        { new: true }
                    )
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },
    addFriend(req, res) {
       User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
       ) 
       .then((user) =>
            !user
                ? res.status(404).json({ msg: 'No user with this ID' }) 
                : res.json(user)
       )
       .catch((err) => res.status(500).json(err))
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate( 
            { _id: req.params.userId },
            { $pull: { friends: { userId: req.params.friendId }}},
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({ msg: "No friend with this ID" })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    }
};