import React from "react";
import Movies from "./components/Movies/Movies.component";


const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Romance',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/bzXczujSYdsddv9FZBmVhPUN65z.jpg',
    },
    {
      id: 2,
      title: 'Fantasy',
      imageUrl: 'https://media.themoviedb.org/t/p/w220_and_h330_face/q1czoLwMaiUO1bznWuETCP5ueZj.jpg',
    },
    {
      id: 3,
      title: 'Thriller',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg',
    }
  ]
  return <Movies movies={categories}/>;
};
  

export default App;