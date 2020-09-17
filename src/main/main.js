import React, { useState } from 'react';
import './main.css';
import { Title } from '../title/title';
import { CreateButton } from '../create-button /create-button';
import { Card } from '../card/card';

function Main() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: `Мёртвая`,
      description: `или прикидывается`,
      type: `dead`,
    },
    {
      id: 2,
      title: `Живая`,
      description: `и шевелится`,
      type: `live`,
    },
    // {
    //   id: 3,
    //   title: `Жизнь`,
    //   description: `Ку-ку!`,
    //   type: `life`,
    // }
  ])

  const handleAdd = () => {
    const newCard = Math.random() < 0.5
      ? {
        id: Math.random(),
        title: `Мёртвая`,
        description: `или прикидывается`,
        type: `dead`,
      }
      : {
        id: Math.random(),
        title: `Живая`,
        description: `и шевелится`,
        type: `live`,
      }
    console.log('click')
    setCards([newCard, ...cards])
  }

  return (
    <div className="main-container">
      <Title />
      <div className="main-wrapper">
        <div className="cell-wrapper">
          {cards.map(({ id, title, description, type }) => (
            <Card
              key={id}
              title={title}
              description={description}
              type={type}
            />
          ))}
          
        </div>
        <CreateButton onClick={handleAdd}/>
      </div>
    </div>
  );
}

export { Main };
