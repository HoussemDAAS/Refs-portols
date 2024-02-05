import { useState,useRef } from "react";
export default function Player() {
const [name, setName] = useState('');

const PlayerName=useRef();

function handleClick() {
  setName(PlayerName.current.value);
  
}
  return (
    <section id="player">
      <h2>Welcome {name ? name : 'Guest'}</h2>
      <p>
        <input ref={PlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
