const Thought = require('../models/Thought');

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
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) => 
                !thought
                    ? res.status(404).json({ msg: 'No course with this ID!' })
                    : res.json(thought)
            )
        .catch((err) => res.status(500).json(err))
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ msg: 'No thought with that ID' }) 
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId }},
                        { new: true }
                    )
            )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ msg: 'Thought deleted but no user found' })
                    : res.json({ msg: 'Thought successfully deleted' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    }
};