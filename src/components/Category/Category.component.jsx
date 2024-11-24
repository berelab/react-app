import './Category.scss';

const Category = ({ genre }) => {
  const { title , movies } = genre;
  return (
    <div className="category">          
      <h2>{title}</h2>
      <div className="category__carousel">
        {movies.map((film) => (
          <img key={film.id} value={film.id}  className='category__carousel__item' src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title} />
        ))}
      </div>
    </div>
  );
};

export default Category;