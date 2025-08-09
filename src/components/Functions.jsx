import PropTypes from "prop-types";
import Button from "./Button";

const Functions = ({ handleClear, handleDelete }) => {
  return (
    <section className="functions">
      <Button text={"C"} type="button-long-text" handleClick={handleClear} />
      <Button text="&larr;" handleClick={handleDelete} />
    </section>
  );
};

//Validations
Functions.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Functions;
