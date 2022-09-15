import React, { useEffect, useState } from 'react';
import './TinderCards.css';
// import image from "./assets/Elon.jpg";
import TinderCard from 'react-tinder-card';
import axios from './axios';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    }

    fetchData();
  }, []);

  console.log(people);

  // {
  //   name: 'Elonmusk',
  //   url: 'https://nationaltoday.com/wp-content/uploads/2022/05/123-Elon-Musk.jpg',
  // },
  // {
  //   name: 'jeffbozz',
  //   url: 'https://i.guim.co.uk/img/media/e422f20fb3d760f1f410eeeda98bc7b355f621d8/0_42_2925_1755/master/2925.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6ce04726558a02c6c810812d348d756',
  // },

  const swiped = (direction, nameToDelete) => {
    console.log('removing:' + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + 'left the screen!');
  };

  return (
    <div className="tindercards">
      {/* <div>
        <img src={image} alt="logo"></img> 
      <h1>roseapppa</h1>
      </div> */}

      <div className="tindercards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
