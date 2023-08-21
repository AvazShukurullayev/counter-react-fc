import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const doubleAddFunc = () => {
    setCount((prev) => prev + 2);
  };
  const decrementFunc = () => {
    setCount((prev) => prev - 1);
  };
  const resetFunc = () => {
    setCount(0);
  };
  const incrementFunc = () => {
    setCount((prev) => prev + 1);
  };
  const multipleFunc = () => {
    setCount((prev) => prev * 2);
  };
  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="col border shadow py-4">
            <h1 className="my-3">Counter: {count}</h1>
            <div className="btn-group">
              <button onClick={decrementFunc} className="btn btn-danger">
                Subtract -1
              </button>
              <button onClick={resetFunc} className="btn btn-info">
                Reset 0
              </button>
              <button onClick={incrementFunc} className="btn btn-success">
                Add +1
              </button>
              <button onClick={multipleFunc} className="btn btn-primary">
                Multiple x2
              </button>
              <button onClick={doubleAddFunc} className="btn btn-warning">
                Add x2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
