import React from 'react'
import Hotels from './Hotels'
import { useState } from 'react'

const HotelsPages = (props) =>{
    const [page, setPage] = useState (0);

    function handleClick(page){
        setPage(page)
    }

    return (
        <div>
            <Hotels pageNumber={page} />
            <button onClick={()=> handleClick(1)}>1</button>
            <button onClick={()=> handleClick(2)}>2</button>
            <button onClick={()=> handleClick(3)}>3</button>
            
        </div>
    )
}

export default HotelsPages