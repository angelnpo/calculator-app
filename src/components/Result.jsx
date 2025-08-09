import PropTypes from "prop-types";

const Result = (props) => {
  const { value = "0", message } = props;
  return (
    <div className="result">
      <span>{value}</span>
      <span>{message}</span>
    </div>
  );
};

//Validations
Result.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default Result;
