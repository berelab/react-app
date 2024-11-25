import Category from "../Category/Category.component"
import './Movies.scss';

const Movies = ({movies}) => {
  return (
    <div className="movies__container">
      {movies.map((genre, index) => (
        <Category key={index} genre={genre}/>        
      ))}
    </div>
  );
};

export default Movies;