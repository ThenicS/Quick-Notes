import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as notesAPI from '../../utilities/notes-api';

import { INote, IUser } from '../../interface/interface';

interface INoteCreateProps {
    onCreate: (note: INote) => void;
    user: IUser;
}

const NoteCreate: React.FunctionComponent<INoteCreateProps> = ({
    onCreate,
    user,
}) => {
    const [title, setTitle] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Call notesAPI.create() with the title as an argument
            const note = await notesAPI.create({ title: title });
            // await notesAPI.create({ title });
            // Call onCreate callback if needed
            console.log(note);
            onCreate(note);
            // Reset the title after creating the note
            setTitle('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange} />
                <button type='submit'>Create</button>
            </form>
            <div>
                <span>Welcome:{user.name}</span>
            </div>
        </div>
    );
};

export default NoteCreate;
