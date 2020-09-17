import React from 'react';
import './card.css';

const imgTypes = {
  dead: 'dead-cell-image',
  live: 'live-cell-image',
  life: 'life-image'
}

const gradietTypes = {
  dead: 'image-wrapper-dead-cell',
  live: 'image-wrapper-live-cell',
  life: 'image-wrapper-life'
}

function Card(props) {
  const { title, description, type } = props;

  return (
    <div className="cell-container">
      <div className={`image-wrapper ${gradietTypes[type]}`}>
        <div className={`image ${imgTypes[type]}`}></div>
      </div>
      <div className="cell-description">
        <p className="cell-title">{title}</p>
        <p className="cell-details">{description}</p>
      </div>
    </div>
  );
}

export { Card };
