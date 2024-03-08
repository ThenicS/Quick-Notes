import { Link } from 'react-router-dom';

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/register'>Register</Link>
            &nbsp; | &nbsp;
            <Link to='/login'>Log In</Link>
        </nav>
    );
};

export default NavBar;
