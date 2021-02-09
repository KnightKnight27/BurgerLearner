import React,{Component} from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    }
    render()
    {
        return (
        <Aux>
        <div> <Toolbar drawerToggleClicked= {this.sideDrawerToggleHandler}/> < SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />, Backdrop</div>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>  
        );
    }
}
export default Layout;