export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export interface INullUser {
    _id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    createdAt: string | null;
    updatedAt: string | null;
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
