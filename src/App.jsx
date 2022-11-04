import {  useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./Components/About";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Popular from "./Components/Popular";
import Profile from "./Components/Profile";
import Searched from "./Components/Searched";
import SearchedByName from "./Components/SearchedByName";
import { UserContext } from "./contexts/UserContext";

const App = () => {



  const goto = useNavigate();

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
  const [ UserName , setUser ] = useState(null)
  const [ User , setU ] = useState(null)

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


  const login = () => {
    setUser(User);
    goto('/profile' , {replace : true})
  }

  const logout = () => {
    setUser(null)
    localStorage.clear()
    goto('/Movie-Api' , {replace : true})
  }

  return ( 
  <>  
    <UserContext.Provider value={[UserName , setUser]}>
         <Nav />
          <Routes>
              <Route path="/Movie-Api" element={  <Popular data={popular}/>  } />
              <Route path="/SearchByGenre" element={ <Searched  data={movies_by_genre} genre={getinputdataGenre} /> } />
              <Route path="/About" element={ <About/> } />
              <Route path="/SearchByName" element={ <SearchedByName data={movies_by_Name}  movie={getinputdataMovie} /> } />
              <Route path="/Popular" element={ <Popular data={popular}/> } />
              <Route path="/Profile" element={ <Profile  logout={logout} /> } />
              <Route path="/Login" element={ <Login data={setU} login={login} /> } />
          </Routes>
          </UserContext.Provider>
    
  </>
   );
}
 
export default App;