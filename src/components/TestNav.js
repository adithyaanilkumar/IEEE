import React from 'react';

import { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const TestNav = () => {
    useEffect(() => {
		let sidenav = document.querySelector('#slide-out');
		M.Sidenav.init(sidenav, {});

	}, [])
    return(
        <div className="navbar-fixed">
        <nav className="sidenav-trigger">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>
      </nav>
    
      <ul className="sidenav" id="mobile-links">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
      </div>
    )
    }
     export default TestNav