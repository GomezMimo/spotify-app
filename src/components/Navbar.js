import React, {Component} from "react";
import { Link, hashHistory } from 'react-router';
import constants from './constants';

export default class Navbar extends Component {
  addClass(e){
      $(e.target).parent().addClass('active');
      $(e.target).parent().siblings().removeClass('active');      
  }
  render() {    
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">{constants.appName}</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active" onClick={this.addClass}><Link to="/">Home</Link></li>
              <li onClick={this.addClass}><Link to="/search" >Search Music</Link></li>
              <li onClick={this.addClass}><Link to="/logout" >Log out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
