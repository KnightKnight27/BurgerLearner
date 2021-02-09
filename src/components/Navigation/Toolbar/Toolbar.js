import React from 'react';
import classes from './Toolbar.css';
import Logo from  '../../Logo/Logo.js';
import DrawerToggle  from '../SideDrawer/DrawerToggle/DrawerToggle.js';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems.js';
const toolbar = (props)=>(
 
   <header className={classes.Toolbar}>
      <DrawerToggle  clicked={props.drawerToggleClicked}/>
      <div className={classes.Logo}></div>
       <div> </div>
       <Logo />
       <nav>
          <NavigationItems/>
       </nav>
   </header>
);
export default toolbar;