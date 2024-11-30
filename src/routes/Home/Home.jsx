import Loader from "../../components/Loader/Loader.component";
import MovieCategories from "../../components/MoviesCategories/MovieCategories.component";
import movieState from "../../hooks/movieState";

const Home = () => {
  const { movies, loading, error } = movieState();

  if(loading) return <Loader/>;
  if(error) return "An error occurred...";
  
  const categories = movies.map((movie) => ({
    title: movie.name,
    movies: movie.movies || [],
  }));

  return <MovieCategories movies={categories}/>;
};
  

export default Home;