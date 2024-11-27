import { Link } from 'react-router-dom';

const Carousel = ({movies}) => {
  return (
    <div className="category__carousel">
        {movies.map((film) => (
          <div key={film.id} className='category__carousel__item'>
            <Link to={`/movie/${film.id}`}>
              <img value={film.id} src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title} />
              <p className='category__carousel__title'>{film.title}<br/><span>{film.release_date}</span></p>
            </Link>
          </div>
        ))}
      </div>
  );
};

export default Carousel;