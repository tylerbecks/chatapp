import React, { Component } from 'react';
import $ from 'jquery';
import Sidebar from './Sidebar'
import MessageBox from './MessageBox'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      messages: [{
        "id": 1,
        "author": "Jane",
        "timestamp": 1421953410956,
        "content": "Hello!"
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
    $.getJSON('/fixtures/fakedata.json', data => {
        console.log("success");
        console.log(data);
    }).done(() => {
        console.log("another success message");
    }).fail(() => {
        console.error("error");
    }).always(() => {
        console.info("complete");
    });
  }

  handleChangeName(e) {
    e.preventDefault()
    this.setState({
      username: e.target.value,
    })
  }

  handleChangeMessage(e) {
    e.preventDefault()
    this.setState({
      message: e.target.value,
    })
  }

  handleSubmitMessage(e) {
    e.preventDefault()
    //TODO: add to JSON data
    this.setState({
      message: '',
    })
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
