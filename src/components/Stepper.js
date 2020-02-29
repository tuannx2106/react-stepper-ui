import React from 'react'

const Stepper = props => {
  const { children } = props

  return (
    <div className="stepper">
      {children}
    </div>
  )
}

export default Stepper