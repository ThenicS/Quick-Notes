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

const login = async (req: Request, res: Response) => {
    try {
        // Find the user by their email address
        // user type any <<<<<<<
        const user: any = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        // Check if the password matches
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch (error) {
        console.log(error);
        res.status(400).json('Bad Credentials');
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

export default { create, login };
