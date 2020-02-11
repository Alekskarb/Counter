import React from 'react';

const Button = (props) => {

    return (
        <button className="button" disabled={props.switch} onClick={props.setData}>
            {props.title}
        </button>
    );
};
export default Button;