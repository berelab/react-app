import './Category.styles.scss';

const Category = ({ genre }) => {
  const { title , imageUrl } = genre;
  return (
    <div className="category">          
      <h2>{title}</h2>
      <div className="category__carousel">
          <img className='category__carousel__item' src={imageUrl} />
          <img className='category__carousel__item' src={imageUrl}/>
          <img className='category__carousel__item' src={imageUrl}/>
          <img className='category__carousel__item' src={imageUrl}/>
          <img className='category__carousel__item' src={imageUrl}/>
          <img className='category__carousel__item' src={imageUrl}/>
          <img className='category__carousel__item' src={imageUrl}/>
      </div>
    </div>
  );
};

export default Category;