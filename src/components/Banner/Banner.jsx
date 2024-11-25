import './Banner.scss';

const Banner = ({details}) => {
  return (
    <div className="banner">
      <div className="banner__container">
        <img alt={details.title} src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}/>
        <h2>{details.title}</h2>
      </div>
    </div>
  );
};

export default Banner;