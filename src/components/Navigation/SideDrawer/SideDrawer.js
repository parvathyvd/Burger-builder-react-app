import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../Burger/UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses =  [classes.SideDrawer, classes.Open];
    }
    return ( 
        <React.Fragment>
            <BackDrop show={props.open}
            clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}><Logo/></div>
                <nav>
                <NavigationItems />
                </nav>
        </div> 
        </React.Fragment>
   );
}
 
export default sideDrawer;