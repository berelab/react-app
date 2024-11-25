import Movies from "../../components/Movies/Movies.component";
import movieState from "../../hooks/movieState";

const Home = () => {
  const { data: romanceMovies, loading: loadingRomance, error: errorRomance } = movieState(10749);
  const { data: fantasyMovies, loading: loadingFantasy, error: errorFantasy } = movieState(14);
  const { data: thrillerMovies, loading: loadingThriller, error: errorThriller } = movieState(53);
  const { data: musicMovies, loading: loadingMusic, error: errorMusic } = movieState(10402);

  const isLoading = [loadingRomance, loadingFantasy, loadingThriller, loadingMusic].some(loading => loading);

  if(isLoading) return "loading content..."
  
  const categories = [
    {
      title: 'Romance',
      movies: romanceMovies.results,
    },
    {
      title: 'Fantasy',
      movies: fantasyMovies.results,
    },
    {
      title: 'Thriller',
      movies: thrillerMovies.results,
    },
    {
      title: 'Music',
      movies: musicMovies.results,
    },
  ]

  return <Movies movies={categories}/>;
};
  

export default Home;