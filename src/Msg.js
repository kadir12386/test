import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";
import { Counter } from "./Counter";

export function Msg({
  user_names,
  user_img,
  des,
  rating,
  deleteMovieButton,
  id,
  editMovieButton,
}) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log("state or props is changed", show);
  });
  const styles = { display: show ? "block" : "none" };
  return (
    <div className="card">
      <div className="car-image">
        <img src={user_img} alt={user_names} />
      </div>
      <div className="movie_info">
        <div className="movie-specs">
          <h3 className="movie-name">{user_names}</h3>
          <p className="movie-rating">
            <span className="star" role="img" aria-label="star">
              ⭐
            </span>{" "}
            {rating}
          </p>
        </div>

        <div className="edit_delete_icon">
          <IconButton
            aria-label="Info about movie"
            // color="primary"
            variant="contained"
            onClick={() => {
              history.push("/movies/" + id);
            }}
          >
            <InfoIcon className="info-icon" />
          </IconButton>
          {editMovieButton}
          {deleteMovieButton}
        </div>

        <div className="counter_info_icon">
          <Counter />
          <IconButton
            aria-label="delete"
            variant="contained"
            onClick={() => setShow(!show)}
          >
            {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>

        <p style={styles}>{des}</p>
      </div>
    </div>
  );
}
