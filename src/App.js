import React, { Component } from 'react';
import Sidebar from './Sidebar'
import MessageBox from './MessageBox'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      conversations: {},
      message: '',
      username: '',
    }
  }

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
