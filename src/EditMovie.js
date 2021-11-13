// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateStoreMovies } from "./getFromStorage";
import { getFromStorage } from "./getFromStorage";

export function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  const movie = getFromStorage("movies")[id];

  const history = useHistory();
  console.log(movie);
  // console.log(movie.name);
  // const [movieName, setMovieName] = useState("");
  // const [moviePoster, setMoviePoster] = useState("");
  // const [moviedes, setMovieDes] = useState("");
  // const [movietrailer, setMovieTrailer] = useState("");

  const [movieName, setMovieName] = useState(movie.name);
  const [moviePoster, setMoviePoster] = useState(movie.pic);
  const [moviedes, setMovieDes] = useState(movie.des);
  const [movietrailer, setMovieTrailer] = useState(movie.trailer);

  const editMovie = () => {
    //Find the elememt And update the data
    const editedMovie = {
      name: movieName,
      pic: moviePoster,
      des: moviedes,
      trailer: movietrailer,
    };
    let updatedMovies = [...movies]; //copy of the movie
    console.log("before", updatedMovies);

    updatedMovies[id] = editedMovie; //replacing part

    console.log("After", updatedMovies);
    setMovies(updatedMovies);
    updateStoreMovies(updatedMovies);
    history.push("/movie");
  };

  return (
    <div className="inputBox">
      <TextField
        label="Movie name"
        variant="outlined"
        color="success"
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
        label="movie trailer"
        variant="outlined"
        color="success"
        value={movietrailer} //textbox ku values set pannuthu
        onChange={(event) => setMovieTrailer(event.target.value)}
      />

      <button className="AddBtn" onClick={editMovie}>
        Edit movie
      </button>
    </div>
  );
}
