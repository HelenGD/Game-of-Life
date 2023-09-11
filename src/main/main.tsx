import { useState } from 'react';
import './main.css';
import { Title } from '../title/title';
import { CreateButton } from '../create-button/create-button';
import { Card } from '../card/card';
import { isNeedLifeCard, isNeedKillLife } from '../utils';
import { Cell } from '../entities/cell/types';

function Main() {
  const [cards, setCards] = useState<Cell[]>([]);

  const handleAdd = () => {
    const newCard: Cell =
      Math.random() < 0.5
        ? {
            id: crypto.randomUUID(),
            title: `Мёртвая`,
            description: `или прикидывается`,
            type: `dead`,
          }
        : {
            id: crypto.randomUUID(),
            title: `Живая`,
            description: `и шевелится`,
            type: `live`,
          };

    const newCards = [newCard, ...cards];
    if (isNeedLifeCard(newCards)) {
      newCards.unshift({
        id: crypto.randomUUID(),
        title: `Жизнь`,
        description: `Ку-ку!`,
        type: `life`,
      });
    } else if (isNeedKillLife(newCards)) {
      newCards.splice(3, 1);
    }
    setCards(newCards);
  };

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
        <CreateButton onClick={handleAdd} />
      </div>
    </div>
  );
}

export { Main };
