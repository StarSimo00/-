import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "./Components/About";
import Animation from "./Components/Animation";
import Horror from "./Components/Horror";
import Nav from "./Components/Nav";
import Popular from "./Components/Popular";
import Searched from "./Components/Searched";
// import Test from "./Components/Test";

const App = () => {



  const fetchPopular = async () => {
      const fetching_data_Popular = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2f3659e2d055859a0ba3da6e671f91f5&language=en-US&page=2')
      const popular_movies = await fetching_data_Popular.json();
      setPopular(popular_movies.results);
    } 

  const fetchHorror = async () => {
      const fetching_data_Horror = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2f3659e2d055859a0ba3da6e671f91f5&with_genres=27')
      const Horror_movies = await fetching_data_Horror.json();
      setHorror(Horror_movies.results);
  }

  const fetchAnimation = async () => {
    const fetching_data_Animation = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2f3659e2d055859a0ba3da6e671f91f5&with_genres=16')
    const Animation_movies = await fetching_data_Animation.json();
    setAnimation(Animation_movies.results);
  }

  const fetchGenres = async () => {
    const fetch_data_genres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=2f3659e2d055859a0ba3da6e671f91f5&language=en-US');
    const Genres = await fetch_data_genres.json();
    setGenres(Genres.genres)
  }

  const fetch_movies_by_genre = async (e) => {
    const fetch_data_by_genre = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2f3659e2d055859a0ba3da6e671f91f5&with_genres=`+ e );
    const by_genre = await fetch_data_by_genre.json();
    setMovieByGenre(by_genre.results);
  }

    
  const [ popular , setPopular ] = useState([]);
  const [ sHorror , setHorror] = useState([]);
  const [ animation , setAnimation] = useState([]);
  const [ genres , setGenres ] = useState([])
  const [ movies_by_genre , setMovieByGenre ] = useState([])
 



  const getinputdata = (e) => {
    const filtred_genre = genres.filter( (f) => f.name.toLowerCase() === e.toLowerCase() )
    try{fetch_movies_by_genre(filtred_genre[0].id)}catch{console.log('getinput fct : no data recieved')}
  }

  useEffect( () => {
    fetchPopular()
    fetchHorror()
    fetchAnimation()
    fetchGenres()
  } , [] )

  return ( 
    <>
         <Nav data={getinputdata}/>
      
          <Routes>
              <Route path="/Movie-Api" element={  <Searched data={movies_by_genre}/>  } />
              <Route path="/Search" element={ <Searched  data={movies_by_genre} /> } />
              <Route path="/About" element={ <About/> } />
              <Route path="/Popular" element={ <Popular data={popular}/> } />
              <Route path="/Horror" element={ <Horror data={sHorror} />  }  />
              <Route path="/Animation"  element={ <Animation data={animation}/> }  />
          </Routes>
    </>
   );
}
 
export default App;