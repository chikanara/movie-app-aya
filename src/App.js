import {moviedata} from "./data"
import './App.css';
import { useState } from "react";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState(moviedata)
  return (
    <div className="App">
      <Filter/>
      <MovieList movies={movies} />
      <AddMovie/>
    </div>
  );
}

export default App;
