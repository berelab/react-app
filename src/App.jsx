import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Favorites from "./routes/Favorites/Favorites";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>   
        <Route index element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>    
      </Route>
    </Routes>
  );
};
  
export default App;