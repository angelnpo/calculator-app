import { useState } from "react";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import "./App.css";

/* eslint no-eval: 0 */
const App = () => {
  const [stack, setStack] = useState("");
  const [message, setMessage] = useState("");

  const handleBtn = (number) => {
    if (message.length > 0) {
      setMessage("");
    }

    setStack(`${stack}${number}`);
  };

  const handleClickOperation = (operation) => {
    if (message.length > 0) {
      setMessage("");
    }

    setStack(`${stack}${operation}`);
  };

  /**
   * Handle click equal.
   * @param {*} operation
   * @returns
   */
  const handleClickEqual = (operation) => {
    const regExp = new RegExp(/([+\-*/]$)|(\/0[0-9])|(^$)/, "g");

    if (regExp.test(stack)) {
      setStack("");
      setMessage("Error");
      return;
    }

    setStack(eval(stack).toString());
  };

  const handleClear = () => {
    if (message.length > 0) {
      setMessage("");
    }

    setStack("");
  };

  const handleDelete = () => {
    if (message.length > 0) {
      setMessage("");
    }

    if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1);
      setStack(newStack);
    }
  };

  return (
    <main className="react-calculator">
      <Result value={stack} message={message} />
      <Numbers handleBtn={handleBtn} />
      <Functions handleClear={handleClear} handleDelete={handleDelete} />
      <MathOperations
        handleClickOperation={handleClickOperation}
        handleClickEqual={handleClickEqual}
      />
    </main>
  );
};

export default App;
