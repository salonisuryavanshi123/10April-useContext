//1. Import Area
import React, { useContext } from 'react'
import D from './D'
import { MyContext } from '..'

//2. Defination ARea
export default function C() {
  //2.1 Hooks Area
  const y = useContext(MyContext);


  //2.2 Function Defination Area

  //2.3 Return Statement
    return (
      <>
        <h1>C Component</h1>
        <h4>My name is {y.name}</h4>
        <h4>My surname is {y.surname}</h4>
        <D></D>
     </>
    )
} 

//3. Export Area

