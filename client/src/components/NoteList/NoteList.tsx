import * as React from 'react';
import NoteShow from '../NoteShow/NoteShow';
// Import Interface
import { INote } from '../../interface/interface';

interface INoteListProps {
    notes: INote[];
    onDelete: (id: string) => void;
}

const NoteList: React.FunctionComponent<INoteListProps> = ({
    notes,
    onDelete,
}) => {
    const renderNotes = notes.map((note) => {
        return <NoteShow key={note._id} note={note} onDelete={onDelete} />;
    });
    return (
        <div>
            <div className='note-list'>{renderNotes}</div>
        </div>
    );
};

export default NoteList;
