import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { text, type, handleClick } = props;
  return (
    <button
      type="button"
      className={type}
      onClick={() => {
        handleClick(text);
      }}
    >
      <span>{text}</span>
    </button>
  );
};

//Validations
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
