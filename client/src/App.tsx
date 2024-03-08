import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage';

import NavBar from './components/NavBar/NavBar';
import { getUser } from './utilities/users-service';
// import './App.css';

function App() {
    const [user, setUser] = useState<any>(() => {
        return getUser();
    });
    console.log(user);
    return (
        <main className='App'>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route
                    path='/register'
                    element={<AuthPage setUser={setUser} />}
                />
            </Routes>
        </main>
    );
}

export default App;
