import React, { Component } from 'react'
import { Link } from 'react-router'

import RegisterLink from '../../components/RegisterLink'
import LoginLink from '../../components/LoginLink'
import LogoutLink from '../../components/LogoutLink'
import Authenticated  from '../Authenticated'
import NotAuthenticated  from '../NotAuthenticated'
import './header.css'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
       <div className="container">
         <div id="navbar-collapse" className="collapse navbar-collapse">
           <ul className="nav navbar-nav">
             <li><Link to="/">Home</Link></li>
           </ul>
           <ul className="nav navbar-nav navbar-right">
            <li>
              <NotAuthenticated><LoginLink /></NotAuthenticated>
            </li>
            <li><NotAuthenticated><RegisterLink /></NotAuthenticated></li>
            <li><Authenticated><LogoutLink /></Authenticated></li>
           </ul>
         </div>
       </div>
     </nav>
    );
  }
}

export default Header
