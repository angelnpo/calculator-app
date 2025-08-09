import PropTypes from "prop-types";
import Button from "./Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const Numbers = ({ handleBtn }) => {
  return <section className="numbers">{renderBtns(handleBtn)}</section>;
};

const renderBtns = (handleBtn) =>
  numbers.map((number) => (
    <Button key={number} text={number.toString()} handleClick={handleBtn} />
  ));

//Validations
Numbers.propTypes = {
  handleBtn: PropTypes.func.isRequired,
};

export default Numbers;
