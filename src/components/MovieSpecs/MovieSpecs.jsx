import './MovieSpecs.scss';
import { formatDate } from '../../utils/dateFormatter';
import { addToWatchList } from '../../utils/watchlistMethods';
import { useWatchlist } from '../../context/WatchlistContext';

const MovieSpecs = ({details}) => {
  const { watchlist, setWatchlist } = useWatchlist();
  const { title, poster_path, genres, original_language, overview, release_date } = details;

  const isFavorite = watchlist.some((item) => item.id === details.id);

  const handleAddToWatchList = async() => {
    const updateWatchlist = await addToWatchList(details);    
    setWatchlist(updateWatchlist);
  };
  
  return(
    <div className='movie_specs'>
      <div className='movie__image'>
        <img alt={title} src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
      </div>
      <div className='movie__details'>
        <div className='movie__details__header'>
          <h3>{title}</h3>
        </div>
        <div className='movie__details__body'>
          <p><strong>Release date: </strong>{formatDate({release_date})}</p>
          <p><strong>Genres: </strong> 
          {genres && genres.map((genre)=> (
            genre.name + ', '
          ))}
          </p>
          <p><strong>Language:</strong> {original_language}</p>
          <p><strong>Overview:</strong><br/>{overview}</p>
          <button className="button" onClick={handleAddToWatchList} role="button"><span className="button__text">{isFavorite? 'Remove from watchlist 💔' : 'Add to watchlist ❤️'}</span></button>
        </div>
      </div>
    </div>
  );
};

export default MovieSpecs