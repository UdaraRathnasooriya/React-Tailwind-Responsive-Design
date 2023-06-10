import React, { Fragment } from 'react'

const Button = ({styles}) => {
  return (
    <Fragment>
      <button type='button' className={`py-4 px-6 bg-cyan-600 rounded-xl font-poppins font-medium text-black ${styles}`}>
        Get Started
      </button>
    </Fragment>
  )
}

export default Button