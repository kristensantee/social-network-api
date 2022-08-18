const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSingleThought,
    //updateThought,
    //deleteThought
} = require('../../controllers/userController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought);
//router.route('/:thoughtId').put(updateThought);
//router.route('/:thoughtId').delete(deleteThought);

module.exports = router;