import React, { useState, useEffect } from 'react';
import NoteCreate from '../../components/NoteCreate/NoteCreate';
import NoteList from '../../components/NoteList/NoteList';

import * as notesAPI from '../../utilities/notes-api';

import { IUser, INote } from '../../interface/interface';

interface INotePageProps {
    user: IUser;
}

const NotePage: React.FunctionComponent<INotePageProps> = ({ user }) => {
    const [notes, setNotes] = useState<INote[]>([]);

    const createNote = (newNote: any) => {
        const createNotes: any = [...notes, newNote];
        // setNotes(createNotes);
        setNotes(createNotes);
    };

    const deleteNoteById = async (id: string) => {
        try {
            await notesAPI.deleteNoteById(id);
            // Filter deleted note state
            const updatedNotes = notes.filter((note) => note._id !== id);
            // set Update notes
            setNotes(updatedNotes);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getNotes = async () => {
            const response = await notesAPI.getNotes();
            const updatedNotes = response;
            // Set new notes
            setNotes([...notes, ...updatedNotes]);
        };
        getNotes();
    }, []);
    return (
        <div>
            <NoteList notes={notes} onDelete={deleteNoteById} />
            <NoteCreate onCreate={createNote} />
        </div>
    );
};

export default NotePage;
