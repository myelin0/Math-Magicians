import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="calc-grid">
            <div className="output">0</div>
            <div className="input">
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
      </>
    );
  }
}
export default Calculator;
