import { useState } from "react";

export default function Card(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1 className="title" style={{ color: props.color }}>
        {props.title}
      </h1>
      {props.color}
      <img src={props.image} />
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        like
      </button>
      {count}
    </div>
  );
}
