import React from 'react';
import {render} from 'react-dom';
import SideNav from '../common/navigation/SideNav.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <SideNav />
        <p>Hello world!</p>
      </div>

    );
  }
}

render(<App/>, document.getElementById('app'));
