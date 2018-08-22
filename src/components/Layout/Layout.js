import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer : true
    }
    sideDrawerClosed =() =>{
        this.setState({showSideDrawer : false })
    }
    sideDrawerOpenHandler = () =>{
        this.setState( (prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        })
    }

render(){
    return( 
            <React.Fragment>
            <Toolbar sideDrawerOpen = {this.sideDrawerOpenHandler}/>
            <SideDrawer closed={this.sideDrawerClosed} 
            open= {(this.state.showSideDrawer)}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;