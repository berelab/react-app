import Gallery from "../../components/Gallery/Gallery.component";
import { useWatchlist } from '../../context/WatchlistContext';

const Favorites = () => {
  const { watchlist } = useWatchlist();

  return <Gallery list={watchlist}/>;
};
  

export default Favorites;