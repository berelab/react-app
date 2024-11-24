import { Link } from "react-router-dom";
import MainLogo from '../../assets/images/movie-clapperboard-part-2-svgrepo-com.svg'
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__logoContainer"to='/'>
        <MainLogo></MainLogo>
      </Link>
      <div className="menu">
        <Link className="menu__link" to='/favorites'>Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;