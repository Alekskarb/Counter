import React from 'react';

const ButtonS = (props) => {

    return (
        <div className="set">
                <button disabled={props.switch} onClick={props.setData}  >
                    {props.title}
                </button>
        </div>
    );
}
export default ButtonS;