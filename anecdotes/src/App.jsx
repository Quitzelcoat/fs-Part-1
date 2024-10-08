import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  const [maxVote, setMaxVote] = useState(0);

  const nextQuote = () => {
    const randomStr = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomStr);
  };

  const points = () => {
    const newCopy = [...vote];
    newCopy[selected] += 1;
    setVote(newCopy);

    if (newCopy[selected] > vote[maxVote]) {
      setMaxVote(selected);
    }
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          <p>{anecdotes[selected]}</p>
          <p>has {vote[selected]} votes</p>
        </div>

        <div>
          <button onClick={points}>vote</button>
          <button onClick={nextQuote}>next anecdotes</button>
        </div>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[maxVote]}</div>
        <p>has {vote[maxVote]} votes </p>
      </div>
    </>
  );
}

export default App;
