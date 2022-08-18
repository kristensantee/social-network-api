const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    //updateUser,
    //deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser);
//router.route('/:userId').put(updateUser);
//router.route('/:userId').delete(deleteUser);

module.exports = router;