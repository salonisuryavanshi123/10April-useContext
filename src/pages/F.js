//1. Import Area
import React, { useContext } from 'react'
import { MyContext } from '..';

//2. Defination Area
export default function F() {
    //2.1 Hooks Area
    const myinfo = useContext(MyContext);


    //2.2 Function Defination Area
    

    //2.3 Return Statement
    return (
        <>
            {console.log(myinfo)}
            <h1>F Component {myinfo.name}</h1>
        </>
    )
}
