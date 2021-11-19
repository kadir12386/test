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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import Theme from "./Theme";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import TheatersIcon from "@mui/icons-material/Theaters";

updateStoreMovies(initial_Movies);

// localStorage.setItem("movies", JSON.stringify(initial_Movies));

export default function App() {
  const [movies, setMovies] = useState(getFromStorage("movies"));
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} style={{ minHeight: "100vh" }}>
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
              <Link to="/">Home</Link>
              <Link to="/movie">Movies</Link>
              <Link to="/Add-movie">Add Movies</Link>
              <Link to="/color">Color games</Link>
              <Link to="/About">About pages</Link>
              <Button
                startIcon={darkMode ? <Brightness4Icon /> : <DarkModeIcon />}
                style={{ marginLeft: "auto" }}
                color="inherit"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? " Light" : "Dark"} mode
              </Button>
            </Toolbar>
          </AppBar>
          {/* ========= Switch ============== */}

          <Switch>
            <Route exact path="/">
              Welcome to the pages
            </Route>
            <Route path="/movies/edit/:id">
              <EditMovie movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/movies/:id">
              <MovieDetials />
            </Route>

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
      </Paper>
    </ThemeProvider>
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
