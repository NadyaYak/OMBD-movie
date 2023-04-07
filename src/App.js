import './App.css';
import {useState, useEffect} from "react";
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';


function App() {
  const apiKey ="my API";
  const [movie, setMovie] =useState(null);

const getMovie = async(searchTerm) => {
//make fetch request and store response
try{
const response = await fetch(
  `http://www.omdbapi.com/?apikey=26ac860&t=${searchTerm}`
);

//Parse JSON response into a javascript object
const data = await response.json();
//set the Movie state to the movie 
setMovie(data);
} catch(e){
  console.error(e)
}
}

useEffect(() => {
  getMovie("Clueless");
}, []);



  return (
    <div className="App">
   <Form  moviesearch={getMovie}/>

   <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
