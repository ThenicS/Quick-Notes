import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as usersService from '../../utilities/users-service';

//
interface ILoginFormProps {
    setUser: (user: any) => void;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = ({ setUser }) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
        setError('');
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch (error) {
            console.log(error);
            setError('Log In Failed - Try Again');
        }
    };

    return (
        <div>
            <div>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>LOG IN</button>
                </form>
            </div>
            <p>&nbsp;{error}</p>
        </div>
    );
};

export default LoginForm;
