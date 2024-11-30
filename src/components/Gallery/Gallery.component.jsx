import './Gallery.scss';
import { Link } from 'react-router-dom';

const Gallery = ({ list }) => {
  return (
    <div className="fav__container">
      {list.map(({id, title , poster_path, release_date, addedAt}, index ) => (
        <div key={index} className="gallery">
          <Link to={`/movie/${id}`} className='gallery__item'>
            <img className='gallery__item__image' value={id} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
            <p className='gallery__item__title'>{title}<br/><span>{release_date}</span></p>
          </Link>
        </div>        
      ))}
    </div>
  );
};

export default Gallery;