/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ eachVal, text }) => {
  return <button onClick={eachVal}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalValue = good + neutral + bad;

  const avgScore = totalValue
    ? (good * 1 + neutral * 0 + bad * -1) / totalValue
    : 0;

  const percentPos = totalValue ? (good / totalValue) * 100 : 0;

  if (good > 0 || neutral > 0 || bad || 0) {
    return (
      <>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />

        <StatisticLine text='all' value={totalValue} />
        <StatisticLine text='average' value={avgScore} />
        <StatisticLine text='Positive Percentage' value={percentPos} />
      </>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodValue = () => {
    setGood(good + 1);
  };

  const handleNeutralalue = () => {
    setNeutral(neutral + 1);
  };

  const handleBadValue = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button eachVal={handleGoodValue} text={"Good"} />
      <Button eachVal={handleNeutralalue} text={"Neutral"} />
      <Button eachVal={handleBadValue} text={"Bad"} />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
