import React, { useState } from 'react'
import './scss/main.scss'
import Stepper from './components/Stepper'

const stepLabels = ['Supplier', 'Basic Information', 'Lorem ispsum', 'Some dumb text', 'Vertical Stepper']

const App = props => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <Stepper
        activeStep={currentStep}
        stepLabels={stepLabels}
        onChangeOrder={setCurrentStep}
      />
    </div>
  )
}

export default App
