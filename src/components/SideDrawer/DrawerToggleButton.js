import React from 'react'
import './drawerToggleButton.css'
import 'materialize-css/dist/css/materialize.min.css';



//import M from 'materialize-css/dist/js/materialize.min.js';

const drawerToggleButton= props =>(
    <button className="toggle_button transparent waves-effect" onClick={props.click}>
        {/* <a className="waves-effect waves-white btn-flat"> */}
           <i className="material-icons light-blue-text text-darken-4">menu</i>
        {/* </a> */}
    </button>
)

export default drawerToggleButton;