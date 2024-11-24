import './Gallery.styles.scss';

const Gallery = ({ list }) => {
  return (
    <div className="grid">
      {list.map(({ title , imageUrl } ) => (
        <div className='item'>
          <img className='item__image' src={imageUrl}/>
          <p className='item__title'>{title}</p>
        </div>        
      ))}
    </div>
  );
};

export default Gallery;