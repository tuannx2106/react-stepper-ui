import React from 'react'
import './scss/main.scss'
import Step from './components/Step'
import Stepper from './components/Stepper'

const App = props => {
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <Stepper>
        <Step order={1} label="Supplier" />
        <Step order={2} label="Basic Information" />
        <Step order={3} label="Language" isActivated/>
        <Step order={4} label="Lorem ispsum" />
        <Step order={5} label="Some dumb text" />
        <Step order={6} label="Vertical Stepper" />
      </Stepper>
    </div>
  )
}

export default App
