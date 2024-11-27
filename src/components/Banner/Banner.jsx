import './Banner.scss';

const Banner = ({details}) => {
  return (
    <div className="banner">
      <div className="banner__container">
        <img alt={details.title} src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}/>
        <div className='banner__slogan'>
          <h2>{details.title}<span>Rating: {details.vote_average}</span></h2>
          <p>{details.tagline}</p>
        </div>        
      </div>
    </div>
  );
};

export default Banner;