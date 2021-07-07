import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import propTypes from 'prop-types';
import { FormHelperText } from '@material-ui/core';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabContainer=function(props){
    return(
        <Typography component="div" style={{padding:0,textAlign:"center"}}>
             {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: propTypes.node.isRequired
}
class Header extends Component{
    constructor()
    {
        super();
        this.state={
            modalIsOpen:false,
            value:0,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired:"dispNone",
            password:"",
            firstnameRequired:"dispNone",
            firstname:"",
            lastnameRequired: "dispNone",
            lastname:"",
            emailRequired:"dispNone",
            email:"",
            regPasswordRequired:"dispNone",
            regPassword:"",
            contactRequired:"dispNone",
            contact:""
        };
    }
    openModalHandler = () => {
        this.setState({modalIsOpen:true})
        this.setState({
            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired:"dispNone",
            password:"",
            firstnameRequired:"dispNone",
            firstname:"",
            lastnameRequired: "dispNone",
            lastname:"",
            emailRequired:"dispNone",
            email:"",
            regPasswordRequired:"dispNone",
            regPassword:"",
            contactRequired:"dispNone",
            contact:""
        });
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen:false})
    }
    tabChangeHandler=(event,value)=>{
        this.setState({value});
    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password==="" ? this.setState({passwordRequired:"dispBlock"}) : this.setState({passwordRequired:"dispNone"});
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }
    inputPasswordChangeHandler = (e) =>{
        this.setState({password:e.target.value});
    }

    RegisterClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        this.state.regPassword === "" ? this.setState({ regPasswordRequired: "dispBlock" }) : this.setState({ regPasswordRequired: "dispNone" });
        this.state.contact === "" ? this.setState({ contactRequired: "dispBlock" }) : this.setState({ ContactRequired: "dispNone" });
    }
    inputFirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value });
    }

    inputLastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value });
    }

    inputEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }

    inputRegPasswordChangeHandler = (e) => {
        this.setState({ regPassword: e.target.value });
    }

    inputContactChangeHandler = (e) => {
        this.setState({ contact: e.target.value });
    }



    
    render(){
      
        return(
            <div>
                <header className="app-header">
                 <div className="header-btn">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                 </div>
            </header>
            <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}  style={customStyles}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler} className="tabs">
                    <Tab style={{fontWeight:700}} label="Login"/>
                    <Tab style={{fontWeight:700}} label="Register"/>
                </Tabs>

                {this.state.value === 0 &&
                <TabContainer>
                <FormControl required >
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                            <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                        </FormControl><br/><br/>
                        <Button style={{fontWeight:700}} variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                </TabContainer>
               }
 
                {this.state.value ===1 &&
               <TabContainer>
                   <FormControl required>
                       <InputLabel htmlFor="firstname">First Name</InputLabel>
                       <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler} />
                       <FormHelperText className={this.state.firstnameRequired}>
                       <span className="red">required</span>
                       </FormHelperText>
                   </FormControl><br/><br/>

                   <FormControl required>
                       <InputLabel htmlFor="lastname">Last Name</InputLabel>
                       <Input id="lastname" type="text" lastname={this.state.latname} onChange={this.inputLastnameChangeHandler} />
                       <FormHelperText className={this.state.lastnameRequired}>
                       <span className="red">required</span>
                       </FormHelperText>
                   </FormControl><br/><br/>

                   <FormControl required>
                       <InputLabel htmlFor="email">Email</InputLabel>
                       <Input id="email" type="email" firstname={this.state.email} onChange={this.inputEmailChangeHandler} />
                       <FormHelperText className={this.state.emailRequired}>
                       <span className="red">required</span>
                       </FormHelperText>
                   </FormControl><br/><br/>

                   <FormControl required>
                       <InputLabel htmlFor="regPassword">Password</InputLabel>
                       <Input id="regPassword" type="text" firstname={this.state.regPassword} onChange={this.inputRegPasswordChangeHandler} />
                       <FormHelperText className={this.state.regPasswordRequired}>
                       <span className="red">required</span>
                       </FormHelperText>
                   </FormControl><br/><br/>

                   <FormControl required>
                       <InputLabel htmlFor="contact">Contact No.</InputLabel>
                       <Input id="contact" type="number" firstname={this.state.contact} onChange={this.inputContactChangeHandler} />
                       <FormHelperText className={this.state.contactRequired}>
                       <span className="red">required</span>
                       </FormHelperText>
                   </FormControl><br/><br/>
                   <Button style={{fontWeight:700}} variant="contained" color="primary" onClick={this.RegisterClickHandler}>REGISTER</Button>

               </TabContainer>
      }
 
            </Modal>
            </div>
            
        )
    }
}
export default Header;