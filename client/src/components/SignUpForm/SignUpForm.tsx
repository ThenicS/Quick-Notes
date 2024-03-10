// import * as React from 'react';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { signUp } from '../../utilities/users-service';

import { IUser } from '../../interface/interface';
interface ISignUpformProps {
    setUser: (user: IUser) => void;
}

const SignUpform: React.FunctionComponent<ISignUpformProps> = ({ setUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    });
    const [error, setError] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        setError('');
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await signUp(formData);
            setUser(user);
        } catch (error) {
            setError('Sign up Failed - Try Again');
            console.log(error);
        }
    };

    const disable = formData.password !== formData.confirm;

    return (
        <div>
            <div>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label>Confirm</label>
                    <input
                        type='password'
                        name='confirm'
                        value={formData.confirm}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' disabled={disable}>
                        SIGNUP
                    </button>
                </form>
            </div>
            <p>&nbsp;{error}</p>
        </div>
    );
};

export default SignUpform;
