import { useState, useEffect } from "react";
import Card from "./Card";
import { cardsData } from "../cards";

function Game() {
  const [flipped, setFlipped] = useState([]);
  const [isFreezed, setIsFreezed] = useState(0);
  const [prevCard, setPrevCard] = useState(0);

  const cardsAreSame = (firstId, secondId) => {
    const firstName = cardsData.find((card) => card.id === firstId).name;
    const secondName = cardsData.find((card) => card.id === secondId).name;
    return firstName === secondName;
  };

  return (
    <section className="memory-game">
      {cardsData.map((card) => {
        const { id, name, image } = card;
        return (
          <Card
            key={id}
            card={{ id, name, image, isFlipped: flipped.includes(id) }}
            onClick={() => {
              if (isFreezed || flipped.includes(id)) {
                return;
              }
              if (prevCard === 0) {
                setPrevCard(id);
                setFlipped((prevState) => [...prevState, id]);
              } else {
                setFlipped((prevState) => [...prevState, id]);
                if (cardsAreSame(prevCard, id)) {
                  setPrevCard(0);
                } else {
                  setIsFreezed(1);
                  setTimeout(() => {
                    setPrevCard(0);
                    setFlipped((prevState) => [
                      ...prevState.filter(
                        (current) => current !== id && current !== prevCard
                      ),
                    ]);
                    setIsFreezed(0);
                  }, 1500);
                }
              }
            }}
          />
        );
      })}
    </section>
  );
}

export default Game;
