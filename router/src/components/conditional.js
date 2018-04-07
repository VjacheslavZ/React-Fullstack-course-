import React from 'react'

const Conditional = () => {
    const value = true;
    const returnValue = () => {
        return true
    };
    const showIt = () => {
        return ( returnValue() ?
            <div>
                hello it's true
            </div>
            :
            <div>
                hello it's false
            </div>
        )
    };
    return(
        <div>
            {showIt()}
            Conditional
        </div>
    )
};

export default Conditional;