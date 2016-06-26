import React from 'react';
import {render} from 'react-dom';

class SideNav extends React.Component {
  render () {
    return (
      <div id="nav-bar">
        <p className="nav-title">AGILE</p>
        <button className="btn btn-primary">Start a Retrospective</button>
        <button className="btn btn-primary">How it Works</button>
        <button className="btn btn-primary">Resources</button>

        <p className="nav-title">SHADOWTAIL</p>
        <button className="btn btn-primary">About</button>
        <button className="btn btn-primary">Contact</button>
      </div>
    );
  }
}

export default SideNav;
