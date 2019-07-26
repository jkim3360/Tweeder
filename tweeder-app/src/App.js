/*eslint-disable*/

import React, { Component } from "react";
import Content from "./components/Content/Content";
import "./App.css";
import Header from "./components/Header/Header.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweed: "",
      prevTweeds: ["hey", "what"],
      newTweeds: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ tweed: event.target.value });
  }

  handleSubmit(tweed) {
    event.preventDefault();
    const inputValue = this.state.tweed;

    this.setState({
      prevTweeds: [...this.state.prevTweeds, this.state.tweed],
      message: "hel"
    });
    this.setState(prevState => {
      prevTweeds: [...prevState.prevTweeds, tweed];
    });

    {
      this.state.prevTweeds.map(element => {
        // console.log(this.state.prevTweeds);
        return (
          <h1>
            {" "}
            className="link" to={`${element.toLowerCase()}`} key={element}>
            {element}
          </h1>
        );
      });
    }
  }

  render() {
    // console.log(this.state.tweed);

    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.tweed}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

        <div />
        <div>
          <Content prevTweeds={this.state.prevTweeds} />

          {this.state.tweed}
        </div>
      </div>
    );
  }
}

export default App;
