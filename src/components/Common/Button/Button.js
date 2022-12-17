import React from 'react'
import './style.css'

const Button = ({text, onClick, outLined}) => {
  return (
    <div className={outLined ? "btn-outLined" : "btn-div"} onClick={()=> onClick()}>{text}</div>
  )
}

export default Button