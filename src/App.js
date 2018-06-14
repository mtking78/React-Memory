import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Card from "./components/Card/Card";
import cards from "./components/Card/cards.json";
import Footer from "./components/Footer/Footer";
import './App.css';

let message = "Click a card to begin"
let score = 0;
let topScore = 0;

class App extends Component {

    // Setting the initial states of the App component
    state = {
      // this includes the cards.json array,
      cards,
      message,
      score,
      topScore
    };

    shuffleCards = cards => {
      for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }

    // Resets all cards to unclicked when run with a forEach to the cards array.
    resetCards (cards) {
      cards.clicked = false;
    }

    // handleClick increments this.state.score by 1 and sets the clicked value to `true`
    handleClick = id => {
      const cards = this.state.cards;
       // Filter cards (this.state.cards) for a card with an id equal to the id being clicked
      const clickedCard = cards.filter(card => card.id === id);
      console.log(cards)
      console.log(clickedCard[0].name)

      // If you click the same card...
      if (clickedCard[0].clicked === true) {

        message = "This card has already been clicked! - Try again!"
        // reset the score to 0,
        const score = 0;
        this.setState({ score })
        // reset all clicked values to `false`
        cards.forEach(this.resetCards)

      // if you have clicked all 15 cards non-consecutively...
      // } else if (score >= 14) {

      //   message = "You win!"
      //   // reset the score to 0,
      //   this.setState({ score })
      //   // reset all clicked values to `false`
      //   cards.forEach(this.resetCards)

      } else {

        message = "Keep clicking!"
        // change clicked value to true for clicked card,
        clickedCard[0].clicked = true;
        // shuffle cards after every click,
        this.shuffleCards(cards)
        // update the score on every click
        // score ++;
        const score = this.state.score + 1;
        this.setState({ score: score });

        if (score > topScore) {
          topScore = score;
          this.setState({ topScore })
        }
        if (score === 15) {
          message = "You win!"
          // reset the score to 0,
          const score = 0;
          this.setState({ score })
          // reset all clicked values to `false`
          cards.forEach(this.resetCards)
        }
        console.log("score: " + score + "\ntopScore: " + topScore);
      }

    };

    render() {
      return (
        <div className="App">
          <Navbar message={message} score={this.state.score} topScore={this.state.topScore}/>
          <Container>
            {this.state.cards.map(card => (
              <Card
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
                handleClick={this.handleClick}
              />
            ))}
          </Container>
          <Footer />
        </div>
      );
    }
}

export default App;