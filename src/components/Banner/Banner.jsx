import './Banner.scss';
import { useLocation } from 'react-router-dom';

const Banner = ({details}) => {
  const location = useLocation();
  const {genre} = location.state || {genre : 'Unknown'};
  return (
    <div className="banner">
      <div className="banner__container">
        <img alt={details.title} src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}/>
        <div className='banner__slogan'>
          <h2 className={`${genre? genre.trim() : ''}`}>{details.title}<span> ⭐ {details.vote_average}</span></h2>
          <p>{details.tagline}</p>
        </div>        
      </div>
    </div>
  );
};

export default Banner;