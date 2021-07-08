import ReactDOM from "react-dom";
import React, { Component } from "react";
import Details from '../../screens/details/Details';
import "./Home.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import moviesData from "../../common/movieData";
import genres from "../../common/genres";
import artists from "../../common/artists";
import { ImageList } from "@material-ui/core";
import { ImageListItemBar } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  ImageListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  },
  ImageListMain: {
    transform: "translateZ(0)",
    cursor: "pointer",
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 400,
    maxWidth: 240,
  },
  title: {
    color: theme.palette.primary.light,
  },
});
class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      genres: [],
      artists: []
    };
  }

  movieNameChangeHandler = (event) => {
    this.setState({ movieName: event.target.value });
  };

  genreSelectHandler = (event) => {
    this.setState({ genres: event.target.value });
  };
  artistSelectHandler = (event) => {
    this.setState({ artists: event.target.value });
  };

  movieClickHandler = (movieId) => {
    ReactDOM.render(<Details movieId={movieId} />, document.getElementById('root'));
}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="upcomingMovies-heading">Upcoming Movies</div>
        <ImageList cols={5} className={classes.ImageListUpcomingMovies}>
          {moviesData.map((movie) => (
            <ImageListItem key={movie.id}>
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="movie-poster"
              />
              <ImageListItemBar title={movie.title} />
            </ImageListItem>
          ))}
        </ImageList>
        <div className="flex-container">
          <div className="left">
            <ImageList
              cellHeight={350}
              cols={4}
              className={classes.ImageListMain}
            >
              {moviesData.map((movie) => (
                <ImageListItem
                onClick={() => this.movieClickHandler(movie.id)} 
                  className="released-movie-grid-item"
                  key={"grid" + movie.id}
                >
                  <img
                    src={movie.poster_url}
                    className="movie-poster"
                    alt={movie.title}
                  />
                  <ImageListItemBar
                    title={movie.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {new Date(movie.release_date).toDateString()}
                      </span>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="right">
            <Card>
              <CardContent>
                <FormControl className={classes.formControl}>
                  <Typography className={classes.title} color="textSecondary">
                    {" "}
                    FIND MOVIES BY:
                  </Typography>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                  <Input
                    id="movieName"
                    onChange={this.movieNameChangeHandler}
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-checkbox">
                    Genre
                  </InputLabel>
                  <Select
                    multiple
                    input={<Input id="select-multiple-checkbox-genre" />}
                    renderValue={(selected) => selected.join(",")}
                    value={this.state.genres}
                    onChange={this.genreSelectHandler}
                  >
                    <MenuItem value="0">None</MenuItem>
                    {genres.map((genre) => (
                      <MenuItem key={genre.id} value={genre.name}>
                        <Checkbox
                          checked={this.state.genres.indexOf(genre.name) > -1}
                        />
                        <ListItemText primary={genre.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-checkbox">
                    Artists
                  </InputLabel>
                  <Select
                    multiple
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={(selected) => selected.join(",")}
                    value={this.state.artists}
                    onChange={this.artistSelectHandler}
                  >
                    <MenuItem value="0">None</MenuItem>
                    {artists.map((artist) => (
                      <MenuItem
                        key={artist.id}
                        value={artist.first_name + " " + artist.last_name}
                      >
                        <Checkbox
                          checked={
                            this.state.artists.indexOf(
                              artist.first_name + " " + artist.last_name
                            ) > -1
                          }
                        />
                        <ListItemText
                          primary={artist.first_name + " " + artist.last_name}
                        />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="releaseDateStart"
                    label="Release Date Start"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{ shrink: true }}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="releaseDateEno"
                    label="Release Date End"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{ shrink: true }}
                  />
                </FormControl>
                <br />
                <br />
                <FormControl className={classes.formControl}>
                  <Button variant="contained" color="primary">
                    APPLY
                  </Button>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
