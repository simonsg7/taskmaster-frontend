import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <header>
                  <nav>
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                  <Link to="/tasks">Tasks</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/users">Users</Link>
                  </nav>
            </header>
      );
};

export default Header;