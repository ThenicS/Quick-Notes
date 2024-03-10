import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage';
// import LoginPage from './pages/LoginPage/LoginPage';
import NotePage from './pages/NotePage/NotePage';

import NavBar from './components/NavBar/NavBar';
import { getUser } from './utilities/users-service';

import { IUser } from './interface/interface';

function App() {
    const [user, setUser] = useState<IUser | null>(getUser());

    return (
        <main className='App'>
            <NavBar user={user} setUser={setUser} />
            {user ? (
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/notes' element={<NotePage user={user} />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            ) : (
                <AuthPage setUser={setUser} />
            )}
        </main>
    );
}

export default App;

// <Routes>
//     <Route
//         path='login'
//         element={<LoginPage setUser={setUser} />}
//     />
//     <Route
//         path='/register'
//         element={<AuthPage setUser={setUser} />}
//     />
//     <Route
//         path='*'
//         element={<Navigate to='/login' replace />}
//     />
// </Routes>;
