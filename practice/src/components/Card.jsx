import React from "react";

function Card(probs) {
  return (
    <div className="card">
      <img src={probs.img} alt="" />
      <h1>
        {probs.name},{probs.age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
}

export default Card;
