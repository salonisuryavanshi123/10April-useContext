import React, { useContext } from 'react'
import E from './E'
import { MyContext } from '..';

export default function D() {
        //2.1 Hooks Area
        const a = useContext(MyContext);

        //2.2 Functin Defination Area
    
        //2.3 Return Statement
    return (
        <>
            {console.log(a)}
            <h1>D Component {a.name}</h1>
            <E></E>
        </>
    )
}
