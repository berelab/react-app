import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader__container'>
      <div className="loader">
        <span></span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;