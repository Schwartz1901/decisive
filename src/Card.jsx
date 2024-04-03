import React from 'react';

const Card = ({ description, onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;