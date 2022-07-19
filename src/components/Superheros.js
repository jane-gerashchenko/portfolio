import React, { Component } from "react";

class Superheros extends Component {
  state = { superhero: {} };

  componentDidMount() {
    fetch("https://www.superheroapi.com/api.php/5752439914784969/263/work")
      .then((response) => response.json())
      .then((json) => this.setState({ superhero: json }))
      .catch((error) => alert(error.message));
  }

  render() {
    const { name, occupation, base } = this.state.superhero;

    return (
      <div>
        <h2>Superhero of the day is {name}!</h2>
        <p>
          {occupation} <em>{base}</em>
        </p>
      </div>
    );
  }
}

export default Superheros;
