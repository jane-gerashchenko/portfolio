import React, { Component } from "react";

const Joke = ({ joke: { setup, delivery } }) => (
  <p style={{ margin: 20 }}>
    {setup} <em>{delivery}</em>
  </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((response) => response.json())
      .then((json) => this.setState({ joke: json }))
      .catch((error) => alert(error.message));
  }

  fetchJokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10")
      .then((response) => response.json())
      .then(({ jokes }) => this.setState({ jokes }))
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div>
        <h2>Joke of the day!</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want ten new jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {this.state.jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
