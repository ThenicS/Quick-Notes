// import * as React from 'react';
// // Import Interface
// import { INote } from '../../interface/interface';

// interface INoteShowProps {
//     note: INote;
//     onDelete: (id: string) => void;
// }

// const NoteShow: React.FunctionComponent<INoteShowProps> = ({
//     note,
//     onDelete,
// }) => {
//     const handleClick = () => {
//         onDelete(note._id);
//     };
//     console.log(typeof note);

//     return (
//         <div className='note-show'>
//             <h3>{note.title}</h3>
//             <div className='action'>
//                 <button className='delete' onClick={handleClick}>
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NoteShow;

// import * as React from 'react';
// // Import Interface
// import { INote } from '../../interface/interface';

// interface INoteShowProps {
//     note: INote;
//     onDelete: (id: string) => void;
// }

// const NoteShow: React.FunctionComponent<INoteShowProps> = ({
//     note,
//     onDelete,
// }) => {
//     const handleClick = () => {
//         onDelete(note._id);
//     };
//     console.log(note);

//     return (
//         <div className='note-show'>
//             <h3>{note.title}</h3>
//             <div className='action'>
//                 <button className='delete' onClick={handleClick}>
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NoteShow;

import * as React from 'react';
import { INote } from '../../interface/interface';

interface INoteShowProps {
    note: INote;
    onDelete: (id: string) => void;
}

const NoteShow: React.FunctionComponent<INoteShowProps> = ({
    note,
    onDelete,
}) => {
    const handleClick = () => {
        onDelete(note._id);
    };

    return (
        <div className='note-show'>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            {/* Assuming 'user' is an object with a 'username' property */}
            <p>Created by: {note.user}</p>
            <div className='action'>
                <button className='delete' onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteShow;
