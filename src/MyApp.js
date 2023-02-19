import React, { Component } from "react";

export default class MyApp extends Component {
  // constructor => 1
  constructor(props) {
    super(props);
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
          {/* <input
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
          /> */}
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
  componentDidMount() {
    console.log("componentDidMount");
    // const title = document.getElementById("title");
    // const id = document.getElementById("id");

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     title.innerText = json.title;
    //     id.innerText = json.id;
    //   });

    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    console.log("constructor");
  }

  shouldComponentUpdate(newProps, newState) {
    const pM = this.state.date.getMinutes();
    const nM = newState.date.getMinutes();

    return pM !== nM;
  }

  render() {
    console.log("render");
    return (
      <div>
        {/* <h1>
          Title: <span id="title"></span>
        </h1>
        <h1>
          id: <span id="id"></span>
        </h1> */}
        <h1>Current Time : {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}
