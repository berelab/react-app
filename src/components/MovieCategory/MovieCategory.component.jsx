import Carousel from '../Carousel/Carousel.component';
import './MovieCategory.scss';

const MovieCategory = ({ genre }) => {
  const { title , movies } = genre;
  return (
    <div className="category">          
      <h2>{title}</h2>
      <Carousel movies={movies} />
    </div>
  );
};

export default MovieCategory;