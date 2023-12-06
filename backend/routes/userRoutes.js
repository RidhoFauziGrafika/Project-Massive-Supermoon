const { getUsers, getRegister } = require('../controllers/userController')
const router = require('express').Router()

router.get('/', getUsers)
// router.get('/') get user data before editing
// router.put('/') post user data changes
// router.get('/create')
// router.post('/create')
// router.delete('/delete')


module.exports = router