import React, { Component } from 'react';
import './App.css';
import DinoCard from "./components/DinoCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import dinosaurs from "./dinosaur.json"

function dinosaurShuffle(array) {
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
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  //Score increment, top score, and winner function
  handleIncrement = () => {
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
    this.handleShuffle();
  };

  //Reset function after incorrect guess
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Dino got you!",
      clicked: []
    });
    this.handleShuffle();
  }

  //Shuffle cards function
  handleShuffle = () => {
    let shuffledDinos = dinosaurShuffle(dinosaurs);
    this.setState({ dinosaurs: shuffledDinos });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title = "Jurassic Park Clicky Game"
          score = {this.state.currentScore}
          topScore = {this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

      <Title>
        In order to win the game, only click on images that have not been clicked previously
      </Title>

      <Container>
        <Row>
          {this.state.dinosaurs.map(dinosaur => (
            <Column size = "md-3 sm-6">
              <DinoCard
                key={dinosaur.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={dinosaur.id}
                image={dinosaur.image}
              />
            </Column>
          ))}
        </Row>
      </Container>
      </Wrapper>
    );
  }
}

export default App;
