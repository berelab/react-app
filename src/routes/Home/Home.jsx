import MovieCategories from "../../components/MoviesCategories/MovieCategories.component";
import movieState from "../../hooks/movieState";

const genres = [
  { id: 10749, title: 'Romance'},
  { id: 14, title: 'Fantasy'},
  { id: 53, title: 'Thriller'},
  { id: 10402, title: 'Music'}
];

const Home = () => {
  const states = genres.map((genre) => ({
    ...genre,
    ...movieState(genre.id)
  }));

  const isLoading = states.some((state) => state.loading);

  if(isLoading) return "loading content...";
  
  const categories = states.map((state) => ({
    title: state.title,
    movies: state.data?.results || [],
  }));

  return <MovieCategories movies={categories}/>;
};
  

export default Home;