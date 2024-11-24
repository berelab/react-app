import Category from "../Category/Category.component"
import './Movies.scss';

const Movies = ({movies}) => {
  return (
    <div className="movies__container">
      {movies.map((genre) => (
        <Category key={genre.id} genre={genre}/>        
      ))}
    </div>
  );
};

export default Movies;