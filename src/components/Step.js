import React from 'react'

const Step = props => {
  const { onClickStep, label, order, isActivated } = props

  return (
    <div 
      className={`step ${isActivated ? 'is-active' : ''}`}
      onClick={onClickStep}
    >
      <p className="step__order">{order}</p>
      <p className="step__label">{label}</p>
      <div className="step__tail step__tail--before"></div>
      <div className="step__tail step__tail--after"></div>
    </div>
  )
}

export default Step