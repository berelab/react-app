import { createContext, useContext, useState, useEffect } from 'react';
import { getWatchList } from '../utils/watchlistMethods';

const WatchlistContext = createContext();

export const WatchlistProvider = ({children}) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const obtainWatchlist = async () =>{
      try {
        const data  = await getWatchList();
        setWatchlist(data);

      } catch (error) {
        throw error;
      }
    }

    obtainWatchlist();
  }, []);

  return (
    <WatchlistContext.Provider value={{watchlist, setWatchlist}}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);