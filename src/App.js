import React, { useState } from 'react'
import './scss/main.scss'
import Step from './components/Step'
import Stepper from './components/Stepper'

const stepLabels = ['Supplier', 'Basic Information', 'Lorem ispsum', 'Some dumb text', 'Vertical Stepper']

const App = props => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <Stepper>
        {stepLabels.map((label, index) => (
          <Step
            order={index + 1}
            label={label}
            isActivated={index === currentStep - 1}
            onClickStep={() => setCurrentStep(index + 1)}
          />
        ))}
      </Stepper>
    </div>
  )
}

export default App
