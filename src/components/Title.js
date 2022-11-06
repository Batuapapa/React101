import React from 'react'
import "./Title.css"    
export const Title = (props) => { 
   const getName = () => {console.log("deneme")}
   getName()
  return (
    <p className='classTitle' >{props.propsTitle }</p>
    )
}
