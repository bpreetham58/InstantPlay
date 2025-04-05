import React from "react";

function GameCard({ name, image, onSelect }) {
  return (
    <div onClick={onSelect} className="cursor-pointer shadow-md hover:shadow-xl p-4 rounded-lg border text-center">
      <img src={image} alt={name} className="w-24 h-24 mx-auto mb-2" />
      <p className="font-semibold">{name}</p>
    </div>
  );
}

export default GameCard;