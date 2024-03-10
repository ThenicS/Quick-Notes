import express from 'express';
import noteCtrl from '../../controllers/api/notes';
const router = express.Router();

router.get('/all', noteCtrl.getNotesByUserId);
router.post('/create', noteCtrl.createNote);
router.get('/all/:id', noteCtrl.getNoteById);
router.delete('/all/:id/delete', noteCtrl.deleteNoteById);

export default router;
