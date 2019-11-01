import React from 'react';

const Display = (props) => {
    return (
        <div className="display">
            {
                props.isDataSet ? <h1>{props.startDisplay} </h1> : "enter values"
            }


        </div>
    );
};

export default Display;