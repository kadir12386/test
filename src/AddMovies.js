import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateStoreMovies } from "./getFromStorage";

export function AddMovies({ movies, setMovies }) {
  const history = useHistory();
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [moviedes, setMovieDes] = useState("");

  const [movierating, setMovieRating] = useState("");
  // const [movietrailer, setMovieTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: movieName,
      pic: moviePoster,
      des: moviedes,
      rating: movierating,
      // trailer: movietrailer,
    };
    // console.log([...movies, newMovie], newMovie);
    setMovies([...movies, newMovie]);
    updateStoreMovies([...movies, newMovie]);
    history.push("/movie");
    console.log(newMovie.name);
  };

  return (
    <div className="inputBox">
      <TextField
        className="TextField"
        label="Movie name"
        color="success"
        variant="outlined"
        value={movieName} //textbox ku values set pannuthu
        onChange={(event) => setMovieName(event.target.value)}
      />

      <TextField
        label="Movie Poster"
        variant="outlined"
        color="success"
        value={moviePoster} //textbox ku values set pannuthu
        onChange={(event) => setMoviePoster(event.target.value)}
      />

      <TextField
        label="Movie des"
        variant="outlined"
        color="success"
        value={moviedes} //textbox ku values set pannuthu
        onChange={(event) => setMovieDes(event.target.value)}
      />
      <TextField
        label="movie Rating"
        variant="outlined"
        color="success"
        value={movierating} //textbox ku values set pannuthu
        onChange={(event) => setMovieRating(event.target.value)}
      />
      {/* <TextField
        label="movie trailer"
        variant="outlined"
        color="info"
        value={movietrailer} //textbox ku values set pannuthu
        onChange={(event) => setMovieTrailer(event.target.value)}
      /> */}

      <button className="AddBtn" onClick={addMovie}>
        Add Moive
      </button>
    </div>
  );
}
