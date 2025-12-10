const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const rbac = require('../middlewares/rbac');
const { getAllUsers, createUser } = require('../controllers/userController');

router.get('/', auth, rbac(['Admin', 'Manager']), getAllUsers);
router.post('/', auth, rbac(['Admin']), createUser);

module.exports = router;
