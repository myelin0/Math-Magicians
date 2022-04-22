import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    const data = calculate(this.state, e.target.innerText);
    this.setState(data);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <>
        <div className="container">
          <div className="calc-grid">
            <div className="output">
              {`${total || ''} ${operation || ''} ${next || ''}`}
            </div>
            <div
              className="input"
              role="button"
              tabIndex={0}
              onClick={this.clickHandler}
              onKeyDown={this.clickHandler}
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
      </>
    );
  }
}
export default Calculator;
