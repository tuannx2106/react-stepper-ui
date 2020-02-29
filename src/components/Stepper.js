import React from 'react'
import Step from './Step'

const Stepper = props => {
  const { stepLabels, onChangeOrder, activeStep } = props

  return (
    <div className="stepper">
      {stepLabels.map((label, index) => (
        <Step
          order={index + 1}
          label={label}
          isActivated={index === activeStep - 1}
          onClickStep={() => onChangeOrder(index + 1)}
        />
      ))}
    </div>
  )
}

export default Stepper