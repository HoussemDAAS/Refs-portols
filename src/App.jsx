import Player from './components/Player.jsx';
import { useState } from 'react';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Challenge 1" targetTime={5} />
        <TimerChallenge title="Challenge 2" targetTime={10} />
        <TimerChallenge title="Challenge 3" targetTime={15} />
        <TimerChallenge title="Challenge 3" targetTime={15} />
      </div>
    </>
  );
}

export default App;
