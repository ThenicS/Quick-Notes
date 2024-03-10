export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export interface INote {
    _id: string;
    title: string;
    text: string;
    password: string;
    user: string;
    createdAt: string;
    updatedAt: string;
}
