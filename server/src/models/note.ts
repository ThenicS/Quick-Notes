import mongoose from 'mongoose';
// No need to import User Models
// import User from './User';

const Schema = mongoose.Schema;

const noteSchema = new Schema(
    {
        text: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
