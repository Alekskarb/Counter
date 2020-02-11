import React from 'react';

const Display = (props) => {

    return (
        <div className='text'>
            <div className={props.invalidDisplayValues}>
                {props.startData <= 0 || props.maxData <= 0 || props.startData >= props.maxData || props.maxData <= props.startData
                    ? <span className='displayError'> incorrect values </span>
                    : props.setSwitch
                        ? <span> {props.startDisplay} </span>
                        : <span> set values please</span>}
            </div>
        </div>
    );
};

export default Display;