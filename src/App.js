import React from 'react';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="stepper">
          <div className="step is-first is-visited">
            <p className="step__order">1</p>
            <p className="step__label">Supplier</p>
            <div className="step__tail step__tail--before"></div>
            <div className="step__tail step__tail--after"></div>
          </div>
          <div className="step is-visited">
            <p className="step__order">2</p>
            <p className="step__label">Basic Information</p>
            <div className="step__tail step__tail--before"></div>
            <div className="step__tail step__tail--after"></div>
          </div>
          <div className="step is-activated">
            <p className="step__order">3</p>
            <p className="step__label">Language</p>
            <div className="step__tail step__tail--before"></div>
            <div className="step__tail step__tail--after"></div>
          </div>
          <div className="step">
            <p className="step__order">4</p>
            <p className="step__label">Lorem ispsum</p>
            <div className="step__tail step__tail--before"></div>
            <div className="step__tail step__tail--after"></div>
          </div>
          <div className="step">
            <p className="step__order">5</p>
            <p className="step__label">Some dumb text</p>
            <div className="step__tail step__tail--before"></div>
            <div className="step__tail step__tail--after"></div>
          </div>
          <div className="step is-last">
            <p className="step__order">6</p>
            <p className="step__label">Vertical Stepper</p>
            <div className="step__tail step__tail--before"></div>
            <div className="step__tail step__tail--after"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
