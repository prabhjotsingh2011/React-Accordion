import React, { useCallback, useState } from 'react';
import {questions} from './api'

const MyAccordian=({question,answer})=>{
    const [show,setShow]=useState(false)


    const clicked=()=>{
        setShow(!show)
    }
    return(
        <>
            <div className="main-heading">
                <p onClick={clicked}>{show ? "➖":"➕"}</p>
                <h3>{question}</h3>
            </div>
            { show ?  <p className="answers">{answer}</p> :false}
       </>
    )
}
export default MyAccordian;