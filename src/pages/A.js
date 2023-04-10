//1. Import Area
import React, { useContext } from 'react'
import B from './B'
import { MyContext } from '..'

//2. Defination Area
export default function A() {
    //2.1 Hooks Area
    const x = useContext(MyContext);

    //2.2 Functin Defination Area

    //2.3 Return Statement
    return (
        <>
            <h1>A Component {x.name}</h1>
            <B></B>
        </>
    )
}

//3. Export Area
