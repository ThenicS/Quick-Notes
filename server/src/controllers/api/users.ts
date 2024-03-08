import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/api/user';

const SECRET: string = process.env.SECRET as string;

const create = async (req: Request, res: Response) => {
    try {
        // Add the user to the db
        const user = await User.create(req.body);
        // token will be a string
        const token = createJWT(user);
        // Yes, we can serialize a string
        res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
};

/* Helper Functions */
function createJWT(user: any) {
    return jwt.sign(
        // data payload
        { user },
        SECRET,
        { expiresIn: '24h' }
    );
}

export default { create };
