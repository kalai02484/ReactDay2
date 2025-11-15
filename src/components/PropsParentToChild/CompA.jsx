import React from 'react'

const CompA = ({b}) => {

    let a = 10;

  return (
    <div>
      <p>Child Component A - Value of a is {a}</p>
        <p>Value of b received from Parent Component is {b}</p>
    </div>
  )
}

export default CompA
