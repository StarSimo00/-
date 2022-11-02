import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "./Components/About";
import Animation from "./Components/Animation";
import Horror from "./Components/Horror";
import Nav from "./Components/Nav";
import Popular from "./Components/Popular";

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


    
  const [ popular , setPopular ] = useState([]);
  const [ sHorror , setHorror] = useState([]);
  const [ animation , setAnimation] = useState([]);



  useEffect( () => {
    fetchPopular()
    fetchHorror()
    fetchAnimation()
  } , [] )

  return ( 
    <Router basename="Movie-Api">
         <Nav/>
          <Routes>
              <Route index element={  <Popular  data={popular}/>  } />
              <Route path="/About" element={ <About/> } />
              <Route  path="/Popular" element={  <Popular data={popular}/>  } >
              </Route>
              <Route path="/Horror" element={ <Horror data={sHorror} />  }  />
              <Route path="/Animation"  element={ <Animation data={animation}/> }  />
          </Routes>
    </Router>
   );
}
 
export default App;