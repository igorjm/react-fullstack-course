import React from 'react'

const Conditional = () => {
    
    const value = false

    const returnValue = () => {
        return false
    }

    const showIt = () => {        
        return ( returnValue() ? 
                <div>
                    Hello, its true
                </div> 
                : 
                <div>
                    Hello, its false
                </div> )

    }
    
    return (
        <div>
            {showIt()}
        </div>
    )
}

export default Conditional