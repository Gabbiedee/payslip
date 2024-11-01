import React from 'react'

const Button = ({className,type, prop}) => {
  return (
    <div>
        <button className={className} type={type}>{prop}</button>
    </div>
  )
}

export default Button