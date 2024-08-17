/* eslint-disable react/prop-types */
import Parts from "./Parts";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Parts key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
