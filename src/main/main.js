import React from 'react';
import './main.css';

function Main() {
  return (
    <div className="main-container">
      <p className="main-title">Клеточное наполнение</p>
      <div className="main-wrapper">
        <div className="cell-wrapper">
          <div className="cell-container dead-cell-container">
            <div className="image-wrapper image-wrapper-dead-cell">
              <div className="image dead-cell-image"></div>
            </div>
            <div className="cell-description dead-cell-description">
              <p className="cell-title dead-cell-title">Мёртвая</p>
              <p className="cell-details dead-cell-details">или прикидывается</p>
            </div>
          </div>
          <div className="cell-container live-cell-container">
            <div className="image-wrapper image-wrapper-live-cell">
              <div className="image live-cell-image"></div>
            </div>
            <div className="cell-description dead-cell-description">
              <p className="cell-title dead-cell-title">Живая</p>
              <p className="cell-details dead-cell-details">и шевелится</p>
            </div>
          </div>
          <div className="cell-container live-container">
            <div className="image-wrapper image-wrapper-live">
              <div className="image live-image"></div>
            </div>
            <div className="cell-description dead-cell-description">
              <p className="cell-title dead-cell-title">Жизнь</p>
              <p className="cell-details dead-cell-details">Ку-ку!</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="create-button" type="button">Сотворить</button>
        </div>
      </div>
    </div>
  );
}

export { Main };
