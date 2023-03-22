import Clock from "./Clock";
import PropTypes from "prop-types";

function ClockList({ quantity = [] }) {
  return (
    <div>
      {quantity.map((key) => (
        <Clock key={key} />
      ))}
      ;
    </div>
  );
}

ClockList.propTypes = {
  quantity: PropTypes.any.isRequired, // add this line
  // other prop types here
};

export default ClockList;
