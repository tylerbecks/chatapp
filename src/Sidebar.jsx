import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h2>Tiny Chat</h2>
        <strong>You are logged in as:</strong>
        <span>{this.props.username}</span>
        <form>
          Change username: 
          <input 
            className="changeNameForm"
            type="text"
            name="changeName"
            onChange={this.props.handleChangeName}
          >
          </input>          
        </form>
      </div>
    );
  }
}

export default Sidebar;
