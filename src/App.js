import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DinoCard from "./components/DinoCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import dinosaurs from "./dinosaur.json"

dinosaurShuffle(array) {
  for (let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array [j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting state for this.state
  state = {
    dinosaurs,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  //Image click function
  imageClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.Increment();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.Reset();
    }
  };

  //Score increment, top score, and winner function
  Increment = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "Winner!" });
    }
    this.Shuffle();
  };

  //Reset function after incorrect guess
  Reset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Dino got you!",
      clicked: []
    });
    this.Shuffle();
  }

  //Shuffle cards function
  Shuffle = () => {
    let shuffledDinos = dinosaurShuffle(dinosaurs);
    this.setState({ dinosaurs: shuffledDinos });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title = "Jurassic Park Clicky Game"
          score = {this.state.currentScore}
          topScore = {this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

      <Title>
        In order to win the game, only click on images that have not been clicked previously
      </Title>


    );
  }
}

export default App;
