import React, { useState } from 'react';
import SignUpform from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import { IUser } from '../../interface/interface';

interface IAuthPageProps {
    setUser: (user: IUser) => void;
}

const AuthPage: React.FunctionComponent<IAuthPageProps> = ({ setUser }) => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main className='AuthPage'>
            <div>
                <h3 onClick={() => setShowLogin(!showLogin)}>
                    {showLogin ? 'SIGNUP' : 'LOG IN'}
                </h3>
            </div>
            {showLogin ? (
                <LoginForm setUser={setUser} />
            ) : (
                <SignUpform setUser={setUser} />
            )}
        </main>
    );
};

export default AuthPage;
