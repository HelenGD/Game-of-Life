import React from 'react';
import './create-button.css';


function CreateButton(props) {
  const {onClick} = props;
  
  return (
    <div className="button-container">
      <button 
        className="create-button" 
        type="button"
        onClick={onClick} 
      >Сотворить
      </button>
    </div>
  );
}

export {CreateButton};
