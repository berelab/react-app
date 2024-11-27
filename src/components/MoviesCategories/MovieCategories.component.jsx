import MovieCategory from "../MovieCategory/MovieCategory.component"
import './MoviesCategories.scss';

const MovieCategories = ({movies}) => {
  return (
    <div className="movies__container">
      {movies.map((genre, index) => (
        <MovieCategory key={index} genre={genre}/>        
      ))}
    </div>
  );
};

export default MovieCategories;