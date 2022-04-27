import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = state;

  const clickHandler = (e) => {
    const data = calculate(state, e.target.textContent);
    setState(data);
  };
  return (
    <>
      <div className="calcWrapper">
        <h2>Let`s do some math!</h2>
        <div className="container">
          <div className="calc-grid">
            <div className="output">
              {`${total || ''} ${operation || ''} ${next || ''}`}
            </div>
            <div
              className="input"
              aria-hidden
              onClick={clickHandler}
            >
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
              <button type="button" className="orange">÷</button>
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
              <button type="button" className="orange">x</button>
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
              <button type="button" className="orange">-</button>
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button" className="orange">+</button>
              <button type="button" className="span-two">0</button>
              <button type="button">.</button>
              <button type="button" className="orange">=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
