import express from 'express';
import userCtrl from '../../controllers/api/users';
const router = express.Router();

// Base url might be /api/users
router.post('/', userCtrl.create);

export default router;
