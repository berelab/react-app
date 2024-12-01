import { useParams } from "react-router-dom";
import detailsState from '../../hooks/detailsState';
import Banner from "../../components/Banner/Banner";
import MovieSpecs from "../../components/MovieSpecs/MovieSpecs";
import Loader from "../../components/Loader/Loader.component";
import Carousel from "../../components/Carousel/Carousel.component";

const MovieDetails = () => {
  const { id } = useParams();
  const { recos: recomended, data: movieDetails, loader: loadingDetails, error: errorDetails } = detailsState(id);  

  if(loadingDetails) return <Loader/>;
  if(errorDetails) return "An error occurred...";

  return(
    <div className="detailsPage">
      <Banner details={movieDetails} />
      <MovieSpecs details={movieDetails}/>
      <h3 className="recos__header">Recomendations</h3>
      <Carousel movies={recomended.results} />
    </div>
  );
};

export default MovieDetails;