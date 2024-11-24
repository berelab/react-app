import Gallery from "../../components/Gallery/Gallery.component";


const Favorites = () => {
  const movieList = [
    {
      id: 1,
      title: 'Amor y otras drogas',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/bzXczujSYdsddv9FZBmVhPUN65z.jpg',
    },
    {
      id: 2,
      title: 'Wicked',
      imageUrl: 'https://media.themoviedb.org/t/p/w220_and_h330_face/q1czoLwMaiUO1bznWuETCP5ueZj.jpg',
    },
    {
      id: 3,
      title: 'From',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg',
    },
    {
      id: 4,
      title: 'Amor y otras drogas',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/bzXczujSYdsddv9FZBmVhPUN65z.jpg',
    },
    {
      id: 5,
      title: 'Wicked',
      imageUrl: 'https://media.themoviedb.org/t/p/w220_and_h330_face/q1czoLwMaiUO1bznWuETCP5ueZj.jpg',
    },
    {
      id: 6,
      title: 'From',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg',
    },
    {
      id: 7,
      title: 'Amor y otras drogas',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/bzXczujSYdsddv9FZBmVhPUN65z.jpg',
    },
    {
      id: 8,
      title: 'Wicked',
      imageUrl: 'https://media.themoviedb.org/t/p/w220_and_h330_face/q1czoLwMaiUO1bznWuETCP5ueZj.jpg',
    },
    {
      id: 9,
      title: 'From',
      imageUrl : 'https://media.themoviedb.org/t/p/w220_and_h330_face/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg',
    },
    {
      id: 10,
      title: 'Wicked',
      imageUrl: 'https://media.themoviedb.org/t/p/w220_and_h330_face/q1czoLwMaiUO1bznWuETCP5ueZj.jpg',
    }
  ]
  return <Gallery list={movieList}/>;
};
  

export default Favorites;