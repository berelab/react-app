import { useParams } from "react-router-dom";
import detailsState from '../../hooks/detailsState';
import Banner from "../../components/Banner/Banner";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movieDetails, loader: loadingDetails, error: errorDetails } = detailsState(id);
  
  console.log(movieDetails);

  return(
    <Banner details={movieDetails} />
  );
};

export default MovieDetails;