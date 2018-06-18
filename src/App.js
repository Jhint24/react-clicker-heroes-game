import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Rules from './components/Rules';
import images from './Images';
class App extends Component {
  state = {
    //scoring
    score: 0,
    highScore: 0,
    //images
    allHeroes: this.shuffleCards(),
    clicked: [],
    intialNavMessage: 'Click an Image to Begin the Game'
  };
  //   componentDidMount() {
  //     console.log(this.state.allHeroes);
  //   }
  //shuffle images
  //get the array images
  //make variable of copy of current array using slice
  //create an new empty which will contain randomized array
  //randomize order on screen
  //splice also mutates the components array; mutating your State elements is A Bad Thing To Do; one simple way to avoid that is to create a clone of your array and splice that.
  shuffleCards() {
    const shuffledCards = images.slice();
    const newCardOrder = []; //new random

    //See notes below

    while (shuffledCards.length > 0) {
      let randomize = shuffledCards.splice(Math.floor(Math.random() * shuffledCards.length), 1)[0];
      newCardOrder.push(randomize);
      console.log(randomize);
    }
    return newCardOrder;
  }

  //click an element

  handleClick = event => {
    event.preventDefault();
    this.clickChecker(event.target);
  };

  clickyEvent = this.handleClick.bind(this);

  //determine if it's already been clicked (is element in the clicked array)
  //if clicked already, then restart game, clear array,
  //else push new id into array, shuffle

  clickChecker = clickedImage => {
    let currentScore = this.state.score;
    let currentClicked = this.state.clicked.slice();
    const shuffleUp = this.shuffleCards();

    if (!this.state.clicked.includes(clickedImage.src)) {
      //update score
      currentClicked.push(clickedImage.src);
      this.setState({
        score: (currentScore += 1),
        clicked: currentClicked,
        allHeroes: shuffleUp,
        intialNavMessage: 'Correct!!! Guess Again'
      });
      if (this.state.highScore < currentScore) {
        this.setState({
          highScore: currentScore
        });
      }
      if (currentScore === 12) {
        this.setState({
          intialNavMessage: "Unreal!!! You've Beaten My Game!",
          score: 0,
          clicked: [],
          allHeroes: shuffleUp
        });
      }
      //   console.log(this.state.clicked);
      //   console.log(this.state.allHeroes);
      //this.state.highScore++;
    } else {
      console.log('working');

      this.setState({
        score: 0,
        clicked: [],
        allHeroes: shuffleUp,
        intialNavMessage: 'Sorry, Try Again!'
      });

      //reset score, reset array of clicked, shuffle images
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          navMessage={this.state.intialNavMessage}
        />
        <Rules />
        <Container heroesPictured={this.state.allHeroes} clicked={this.clickyEvent} />
      </div>
    );
  }
}
export default App;

//(method) Array<any>.splice(start: number, deleteCount?: number): any[] (+1 overload)
//       Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero - based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.
//while loop loops through a block of code as long as a specified condition is true.
//grab random index of shuffleCards and put into newCardOrder
//******************LOOK UP and use*****************
//while loop
//look up splice and slice
//Array splice method
//   Array push method
//   Math.random
//   Math.floor
//   while loop
