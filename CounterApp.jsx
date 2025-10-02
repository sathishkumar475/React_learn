import React, { useState } from "react";

const CounterApp = () => {
  let [count, setcount] = useState(0);

  function returnstatement() {
    console.log(100);

    return 100;
  }
  let [sample, setsample] = useState(() => {
    return returnstatement();
  });

  function handleIncrease() {
    setcount((prevecount) => prevecount + 1);
    setcount((prevecount) => prevecount + 1);
    setcount((prevecount) => prevecount + 1);

    // count += 1;
    // console.log(count);
  }
  function handleDecrease() {
    setcount((prevecount) => prevecount - 1);
    setcount((prevecount) => prevecount - 1);
    setcount((prevecount) => prevecount - 1);

    // setcount(count - 1);

    // count -= 1;
    // console.log(count);
  }
  return (
    <div>
      <h1>
        Counter start: {count} -{sample}
      </h1>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default CounterApp;
