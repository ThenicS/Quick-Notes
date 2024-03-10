import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const noteSchema = new Schema(
    {
        title: { type: String, required: true },
        text: { type: String, default: 'Type Here....' },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
