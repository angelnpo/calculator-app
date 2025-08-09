import PropTypes from "prop-types";
import Button from "./Button";

const MathOperations = ({ handleClickOperation, handleClickEqual }) => {
  return (
    <section className="math-operations">
      <Button text={"+"} handleClick={handleClickOperation} />
      <Button text={"-"} handleClick={handleClickOperation} />
      <Button text={"*"} handleClick={handleClickOperation} />
      <Button text={"/"} handleClick={handleClickOperation} />
      <Button text={"="} handleClick={handleClickEqual} />
    </section>
  );
};

//Validations
MathOperations.propTypes = {
  handleClickOperation: PropTypes.func.isRequired,
  handleClickEqual: PropTypes.func.isRequired,
};

export default MathOperations;
