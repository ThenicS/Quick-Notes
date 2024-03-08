import * as React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

interface ILoginPageProps {
    setUser: any;
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = ({ setUser }) => {
    return (
        <div>
            <div>Login Page</div>
            <LoginForm setUser={setUser} />
        </div>
    );
};

export default LoginPage;
