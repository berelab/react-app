import { Link } from "react-router-dom";
import MainLogo from '../../assets/images/Logo white.svg'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__logoContainer" to='/'>
        <MainLogo ></MainLogo>
      </Link>
      <div className="menu">
        <Link className="menu__link" to='/favorites'>Watchlist</Link>
      </div>
    </div>
  );
};

export default Navbar;