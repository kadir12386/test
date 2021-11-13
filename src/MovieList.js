import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Msg } from "./Msg";
import { updateStoreMovies } from "./getFromStorage";

export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  return (
    <div className="App">
      {/* we need to update the movie not the inital moives */}
      {movies.map((el, index) => {
        return (
          <div key={index}>
            <Msg
              editMovieButton={
                <IconButton
                  aria-label="Info about movie"
                  variant="contained"
                  onClick={() => {
                    history.push("/movies/edit/" + index);
                  }}
                >
                  <EditIcon />
                </IconButton>
              }
              deleteMovieButton={
                <IconButton
                  onClick={() => {
                    console.log("deleteing", index);
                    const removeIdx = index;
                    console.log(movies.filter((mv, idx) => idx !== removeIdx));
                    setMovies(movies.filter((mv, idx) => idx !== removeIdx));
                    updateStoreMovies(
                      movies.filter((mv, idx) => idx !== removeIdx)
                    );
                  }}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
              key={index}
              user_names={el.name}
              user_img={el.pic}
              des={el.des}
              id={index}
            />
          </div>
        );
      })}
    </div>
  );
}
