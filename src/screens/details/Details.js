import React, { Component } from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/movieData";
import "./Details.css";
import { Typography } from "@material-ui/core";
import YouTube from "react-youtube";
import { ImageList } from "@material-ui/core";
import { ImageListItemBar } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      starIcons: [
        {
          id: 1,
          stateId: "star1",
          color: "black",
        },
        {
          id: 2,
          stateId: "star2",
          color: "black",
        },
        {
          id: 3,
          stateId: "star3",
          color: "black",
        },
        {
          id: 4,
          stateId: "star4",
          color: "black",
        },
        {
          id: 5,
          stateId: "star5",
          color: "black",
        },
      ],
    };
  }
  componentWillMount() {
    let currentState = this.state;
    currentState.movie = moviesData.filter((mov) => {
      return mov.id === this.props.match.params.id;
    })[0];
  
    this.setState(currentState);
  };
  artistClickHandler = (url) => {
    window.location = url;
}
  starClickHandler = (id) => {
    let starIconList = [];
    for (let star of this.state.starIcons) {
      let starNode = star;
      if (star.id <= id) {
        starNode.color = "yellow";
      } else {
        starNode.color = "black";
      }
      starIconList.push(starNode);
    }
    this.setState({ starIcons: starIconList });
  };
  render() {
    let movie = this.state.movie;
    const opts = {
      height: "450",
      width: "700",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="details">
        <Header id={this.props.match.params.id} showBookShowButton="true"/>
        <div className="back">
         
          <Typography>
                        <Link to="/">  &#60; Back to Home</Link>
                    </Typography>
        </div>
        <div className="flex-containerDetails">
          <div className="leftDetails">
            <img src={movie.poster_url} alt={movie.title} />
          </div>
          <div className="middleDetails">
            <div>
              <Typography variant="headline" component="h2">
                {movie.title}{" "}
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">Genres: </span> {movie.genres.join(", ")}
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">Duration:</span> {movie.duration}{" "}
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">Release Date:</span>{" "}
                {new Date(movie.release_date).toDateString()}{" "}
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold"> Rating:</span> {movie.critics_rating}{" "}
              </Typography>
            </div>
            <div className="marginTop16">
              <Typography>
                <span className="bold">Plot:</span>{" "}
                <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline}{" "}
              </Typography>
            </div>
            <div className="trailerContainer">
              <Typography>
                <span className="bold">Trailer:</span>
              </Typography>
              <YouTube
                videoId={movie.trailer_url.split("?v=")[1]}
                opts={opts}
                onReady={this._onReady}
              />
            </div>
          </div>
          <div className="rightDetails">
            <Typography>
              <span className="bold">Rate this movie:</span>
            </Typography>
            {this.state.starIcons.map((star) => (
              <StarBorderIcon
                className={star.color}
                key={"star" + star.id}
                onClick={() => this.starClickHandler(star.id)}
              />
            ))}
            <div className="bold marginBottom16 marginTop16">
              <Typography>
                <span className="bold">Artists:</span>
              </Typography>
            </div>
            <div className="paddingRight">
              <ImageList cellHeight={160} cols={2}>
                {movie.artists != null &&
                  movie.artists.map((artist) => (
                    <ImageListItem
                      className="gridTile"
                      onClick={() => this.artistClickHandler(artist.wiki_url)}
                      key={artist.id}
                    >
                      <img
                        src={artist.profile_url}
                        alt={artist.first_name + " " + artist.last_name}
                      />
                      <ImageListItemBar
                        title={artist.first_name + " " + artist.last_name}
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
