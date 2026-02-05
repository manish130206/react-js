import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="parent">
      <Card
        img="https://images.unsplash.com/photo-1769433492607-80dca9807b4c?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Manish"
        age={20}
      />
      <Card
        img="https://plus.unsplash.com/premium_photo-1763072944317-fc4b2fd81470?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Aman"
        age={21}
      />
      <Card
        img="https://images.unsplash.com/photo-1765883591687-9256219948cd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Yatit"
        age={23}
      />
    </div>
  );
}

export default App;
