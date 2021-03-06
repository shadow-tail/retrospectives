import React from 'react';
import {render} from 'react-dom';
import SideNav from '../common/navigation/SideNav.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="row site-container">
          <div className="col-xs-4 col-sm-3 col-md-2 nav-col">
            <SideNav />
          </div>

          <div className="col-xs-8 col-sm-9 col-md-10 body-col">
            <p>Hello world!</p>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
