import { useEffect, useState } from 'react';
import { Cell } from './types';

export const useCell = () => {
  const [cards, setCards] = useState<Cell[]>((): Cell[] => {
    const cells = localStorage.getItem('cells');
    return cells ? JSON.parse(cells) : [];
  });

  useEffect(() => {
    localStorage.setItem('cells', JSON.stringify(cards));
  }, [cards]);

  return [cards, setCards] as const;
};
