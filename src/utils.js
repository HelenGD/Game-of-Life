export const isNeedLifeCard = (cards) => {
  if (cards.length < 3) {
    return false;
  }
  for (let i = 0; i < 3; i += 1) {
    if (cards[i].type !== "live") {
      return false;
    }  
  }
  return true;
}

export const isNeedKillLife = (cards) => {
  if (cards.length < 4) {
    return false;
  }
  for (let i = 0; i < 3; i += 1) {
    if (cards[i].type !== "dead")  {
      return false;
    }  
  }
  if (cards[3].type !== "life") {
    return false;
  }
  return true;
}