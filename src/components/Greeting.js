import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState();
  const chanageTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changeText && <Output>It's good to see you</Output>}
      {changeText && <p>Changed!</p>}
      <button onClick={chanageTextHandler}>Change Text!</button>
    </div>
  );
};
export default Greeting;
