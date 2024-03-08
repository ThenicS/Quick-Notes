import * as React from 'react';
import SignUpform from '../../components/SignUpForm/SignUpForm';

interface IAuthPageProps {
    setUser: any;
}

const AuthPage: React.FunctionComponent<IAuthPageProps> = ({ setUser }) => {
    return (
        <>
            <div>AuthPage</div>
            <SignUpform setUser={setUser} />
        </>
    );
};

export default AuthPage;
