import express from 'express';
import usersCtrl from '../../controllers/api/users';
const router = express.Router();

// Base url might be /api/users
// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

export default router;
