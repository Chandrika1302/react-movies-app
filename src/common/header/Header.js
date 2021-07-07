import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';

class Header extends Component{
    render(){
        return(
            <header className="app-header">
                 <div className="header-btn">
                    <Button variant="contained" color="default">Login</Button>
                 </div>
            </header>
        )
    }
}
export default Header;