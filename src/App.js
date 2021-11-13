//git filename is "test"

import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Colorgetdata } from "./Colorgetdata";
import { MovieDetials } from "./MovieDetials";
import { MovieList } from "./MovieList";
import { AddMovies } from "./AddMovies";
import { EditMovie } from "./EditMovie";
import { initial_Movies } from "./initial_Movies";
import { getFromStorage, updateStoreMovies } from "./getFromStorage";
// import Theme from "./Theme";

updateStoreMovies(initial_Movies);

// localStorage.setItem("movies", JSON.stringify(initial_Movies));

export default function App() {
  const [movies, setMovies] = useState(getFromStorage("movies"));

  return (
    <section>
      <AppBar position="static" className="nav">
        <Toolbar className="main-menu">
          <Link to="/Home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/31/31087.png"
              alt="logo"
              width="70"
            />
          </Link>
          <Link to="/Home">Home</Link>
          <Link to="/movie">Movies</Link>
          <Link to="/Add-movie">Add Movies</Link>
          <Link to="/color">Color games</Link>
          <Link to="/About">About pages</Link>
          {/* <Theme /> */}
        </Toolbar>
      </AppBar>
      {/* ========= Switch ============== */}

      <Switch>
        <Route path="/movies/edit/:id">
          <EditMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetials />
        </Route>
        <Route path="/Home">Welcome to the pages</Route>
        <Route path="/Add-movie">
          <AddMovies movies={movies} setMovies={setMovies} />
        </Route>

        <Route path="/movie">
          <MovieList movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/color">
          <Colorgetdata />
        </Route>
        <Route path="/About">About Pages</Route>

        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
      {/* =========================================== */}
    </section>
  );
}

function NotFound() {
  // const style = { width: "100vh" };
  // const style = { width: "100%", display: "flex", justifyContent: "center" };
  return (
    <div className="notfound-container">
      <img
        src="https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png"
        alt="Notfound"
        // style={style}
        className="notfound"
      />
    </div>
  );
}
