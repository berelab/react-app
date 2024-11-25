import { useParams } from "react-router-dom";
import detailsState from '../../hooks/detailsState';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movieDetails, loader: loadingDetails, error: errorDetails } = detailsState(id);
  
  console.log(movieDetails);

  return(
    <p>{`Soy movie ${id} y aqui van mis detalles`}</p>
  );
};

export default MovieDetails;