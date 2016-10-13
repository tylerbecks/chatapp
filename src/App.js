import React, { Component } from 'react';
import json from '../fixtures/fakedata.json';
import Sidebar from './Sidebar';
import MessageBox from './MessageBox';

// support for IE8
if (!Date.now) {
  Date.now = () => (new Date().getTime())
}

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      messages: [{
        "id": 1,
        "author": "Jane",
        "timestamp": 1421953410956,
        "content": "Hello!",
      }],
      message: '',
      username: 'Anonymous',
      users: ['Aaron', 'Thomas', 'Cindy'],
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages: json.messages,
    });
  }

  componentDidMount() {
    this.scrollDown();
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  scrollDown() {
    const element = document.getElementById("messagesArea");
    element.scrollTop = element.scrollHeight;
  }

  handleChangeName(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value,
    });
  }

  handleChangeMessage(e) {
    e.preventDefault();
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmitMessage(e) {
    e.preventDefault();
    this.setState({
      messages: this.state.messages.concat([{
        "id": this.state.messages[this.state.messages.length - 1].id + 1,
        "author": this.state.username,
        "timestamp": Date.now(),
        "content": this.state.message,
      }]),
      message: '',
    });
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          username={this.state.username}
          handleChangeName={this.handleChangeName}
        />
        <MessageBox
          message={this.state.message}
          messages={this.state.messages}
          handleChangeMessage={this.handleChangeMessage}
          handleSubmitMessage={this.handleSubmitMessage}
        />
      </div>
    );
  }
}

export default App;
