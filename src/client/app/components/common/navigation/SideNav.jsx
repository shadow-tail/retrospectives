import React from 'react';
import {render} from 'react-dom';

class SideNav extends React.Component {
  render () {
    return (
      <div id="nav-bar">
        <p className="nav-title">AGILE</p>
        <button>Start a Retrospective</button>
        <button>How it Works</button>
        <button>Resources</button>

        <p className="nav-title">SHADOWTAIL</p>
        <button>About</button>
        <button>Contact</button>
      </div>
    );
  }
}

export default SideNav;
