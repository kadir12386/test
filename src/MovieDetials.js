import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getFromStorage } from "./getFromStorage";

export function MovieDetials() {
  const { id } = useParams();
  const movie = getFromStorage("movies")[id];

  const history = useHistory();
  console.log(movie);
  return (
    <div>
      <div className="movie_trailer">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="movie_trailer_info">
        <h2>Movie Name : {movie.name} </h2>
        <p>{movie.des}</p>
        <Button
          className="AddBtn"
          variant="contained"
          color="success"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
