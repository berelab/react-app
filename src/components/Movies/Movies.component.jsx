import Category from "../Category/Category.component"

const Movies = ({movies}) => {
  return (
    <div className="movies-container">
      {movies.map((genre) => (
        <Category key={genre.id} genre={genre}/>        
      ))}
    </div>
  );
};

export default Movies;