import React from 'react';
import { ReactComponent as Logo } from './logo.svg';

import './NavBarComponent.css'

const NavBarComponent = (props) => {
  
    return (
       <div className="nav-bar">
           <div className="container">
               <Logo/>
           </div>
       </div>
    )
};

export default NavBarComponent;