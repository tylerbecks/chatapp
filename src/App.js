import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MessageBox from './MessageBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar />
          <MessageBox />
        </div>
      </div>
    );
  }
}

export default App;
