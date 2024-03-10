import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { IUser } from '../../interface/interface';

interface INavBarProps {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

const NavBar: React.FunctionComponent<INavBarProps> = ({ user, setUser }) => {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    console.log(user);

    return (
        <nav>
            {user ? (
                <>
                    <Link to='/'>Home</Link>
                    &nbsp; | &nbsp;
                    <Link to='/notes'>Notes</Link>
                    &nbsp; | &nbsp;
                    <span>Welcome {user.name}</span>
                    &nbsp; | &nbsp;
                    <Link to='' onClick={handleLogOut}>
                        Log Out
                    </Link>
                </>
            ) : (
                <>
                    <Link to='/'>Home</Link>
                    &nbsp; | &nbsp;
                    <Link to='/register'>SignUp/Login</Link>
                </>
            )}
        </nav>
    );
};

export default NavBar;
