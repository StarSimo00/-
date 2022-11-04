import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Popular from "./Components/Popular";
import Searched from "./Components/Searched";
import SearchedByName from "./Components/SearchedByName";

const App = () => {



  const fetchPopular = async () => {
      const fetching_data_Popular = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2f3659e2d055859a0ba3da6e671f91f5&language=en-US&page=1')
      const popular_movies = await fetching_data_Popular.json();
      setPopular(popular_movies.results);
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

  const fetch_movies_by_Name = async (e) => {
    
    const fetch_data_by_Name = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2f3659e2d055859a0ba3da6e671f91f5&query=`+ e );
    const by_Name = await fetch_data_by_Name.json();
    setMovieByName(by_Name.results);
  }

    
  const [ popular , setPopular ] = useState([]);
  const [ genres , setGenres ] = useState([])
  const [ movies_by_genre , setMovieByGenre ] = useState([])
  const [ movies_by_Name , setMovieByName ] = useState([])
 



  const getinputdataGenre = (e) => {
    const filtred_genre = genres.filter( (f) => f.name.toLowerCase() === e.toLowerCase() )
    try{fetch_movies_by_genre(filtred_genre[0].id)}catch{}
  }

  const getinputdataMovie = (e) => {
    try{fetch_movies_by_Name(e)}catch{}
  }

  useEffect( () => {
    fetchPopular()
    fetchGenres()
  } , [] )

  return ( 
    <>
         <Nav />
      
          <Routes>
              <Route path="/Movie-Api" element={  <Popular data={popular}/>  } />
              <Route path="/SearchByGenre" element={ <Searched  data={movies_by_genre} genre={getinputdataGenre} /> } />
              <Route path="/About" element={ <About/> } />
              <Route path="/SearchByName" element={ <SearchedByName data={movies_by_Name}  movie={getinputdataMovie} /> } />
              <Route path="/Popular" element={ <Popular data={popular}/> } />
          </Routes>
    </>
   );
}
 
export default App;