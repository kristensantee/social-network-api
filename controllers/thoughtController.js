const { Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
            !thought
                ? res.status(404).json({ msg: 'No thought with that ID' })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err))
    },
    // Folder 14 has example
    // updateThought(req, res) {
    //     Thought.findOneAndUpdate(
    //         // Find first instance of this value
    //         { thoughtId: '' },
    //         // Replace with new value
    //     )
    // }
};