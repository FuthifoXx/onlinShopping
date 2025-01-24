import { children } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        🦊<span>on</span> Line
      </Link>
      <ul>
        <CustomLink to="/signup">Sign up</CustomLink>
        <CustomLink to="/signin">Login</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  //   const path = window.location.pathname;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
