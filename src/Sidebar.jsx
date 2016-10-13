import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h2>Tiny Chat</h2>
        <strong>Your username:</strong>
        <form onSubmit={e => {e.preventDefault()}}>
          <input 
            className="changeNameForm"
            type="text"
            name="changeName"
            value={this.props.username}
            onChange={this.props.handleChangeName}
          >
          </input>          
        </form>
      </div>
    );
  }
}

export default Sidebar;
