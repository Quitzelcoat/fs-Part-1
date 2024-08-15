/* eslint-disable react/prop-types */
const Parts = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

export default Parts;
