import './Gallery.scss';

const Gallery = ({ list }) => {
  return (
    <div className="grid">
      {list.map(({ title , imageUrl }, index ) => (
        <div key={index} className='item'>
          <img className='item__image' src={imageUrl}/>
          <p className='item__title'>{title}</p>
        </div>        
      ))}
    </div>
  );
};

export default Gallery;