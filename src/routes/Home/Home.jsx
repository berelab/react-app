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
      id: 1,
      title: 'Romance',
      movies: romanceMovies.results,
    },
    {
      id: 2,
      title: 'Fantasy',
      movies: fantasyMovies.results,
    },
    {
      id: 3,
      title: 'Thriller',
      movies: thrillerMovies.results,
    },
    {
      id: 4,
      title: 'Music',
      movies: musicMovies.results,
    },
  ]

  return <Movies movies={categories}/>;
};
  

export default Home;