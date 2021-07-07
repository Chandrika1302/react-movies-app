import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    }
});
class Home extends Component{
    
    render(){
        const { classes } = this.props;
        return(
            <div>
            <div><Header/></div>
            <div className="upcomingMovies-heading">Upcoming Movies</div>
            </div>
        )
    }
}
export default withStyles(styles)(Home);