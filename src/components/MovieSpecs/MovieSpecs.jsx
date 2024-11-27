import './MovieSpecs.scss';

const MovieSpecs = ({details}) => {
  return(
    <div className='movie_specs'>
      <div className='movie__image'>
        <img alt={details.title} src={`https://image.tmdb.org/t/p/original${details.poster_path}`}/>
      </div>
      <div className='movie__details'>
        <div className='movie__details__header'>
          <h3>{details.title}</h3>
        </div>
        <div className='movie__details__body'>
          <p><strong>Release date:</strong> {details.release_date}</p>
          <p><strong>Genres:</strong> </p>
          <p><strong>Language:</strong> {details.original_language}</p>
          <p><strong>Overview:</strong><br/>{details.overview}</p>
          <button className="button" role="button"><span className="text">Add to watchlist!</span></button>
        </div>
      </div>
    </div>
  );
};

export default MovieSpecs