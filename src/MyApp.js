import React, { Component } from "react";

export default class MyApp extends Component {
  // constructor => 1
  constructor() {
    super();
    this.state = {
      showChild: true,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // render => 2
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            onChange={this.onChange}
          />
        </div>
        {this.state.showChild ? <UserView user={this.state} /> : null}

        <button
          onClick={(e) => {
            this.setState({ showChild: !this.state.showChild });
          }}
        >
          {this.state.showChild ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

class UserView extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  render() {
    console.log("render");
    const { name, age, contact } = this.props.user;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Contact: {contact}</h1>
      </div>
    );
  }

  componentDidMount() {
    const h1 = document.querySelector("h1");
    console.log(h1);
  }

  componentWillUnmount() {
    const h1 = document.querySelector("h1");
    console.log(h1);

    console.log("componentWillUnmount");
  }
}
