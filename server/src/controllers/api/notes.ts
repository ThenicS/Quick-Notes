import { Request, Response } from 'express';
import Note from '../../models/api/note';

// Controller method for creating a new note
const createNote = async (req: any, res: Response) => {
    try {
        // get user ID from the request
        const userId = req.user._id;
        // get note from the request body
        const { title, text } = req.body;
        // Create a new note object
        const newNote = new Note({
            title,
            text,
            user: userId,
        });
        // Save the new note to the database
        const savedNote = await newNote.save();
        // Send the response
        res.status(201).json(savedNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getNotesByUserId = async (req: any, res: Response) => {
    try {
        // get user ID from the request
        const userId = req.user._id;
        // Find from user ID
        const notes = await Note.find({ user: userId });
        // Send the response
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error getting notes', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getNoteById = async (req: Request, res: Response) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(note);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteNoteById = async (req: Request, res: Response) => {
    try {
        // req.params from :id
        const { id } = req.params;

        // Check if the note exists
        // Change type this one
        const note: any | null = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        // Delete the note
        await Note.findByIdAndDelete(id);

        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default { createNote, getNotesByUserId, deleteNoteById, getNoteById };
