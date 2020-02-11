import React from 'react';

const Menu = (props) => {

    let changeStartValue = (event) => {
        let value = Number(event.currentTarget.value);
        props.setStartValue(value);
    };

    let changeMaxValue = (event) => {
        let newValue = event.currentTarget.value;
        props.setMaxValue(newValue);
    };

    return (
        <div className="container">
            <span className='button'>max value:</span>
            <div>
                <input type="number"
                       onChange={changeMaxValue}
                       disabled={props.maxInputSwitch}
                       value={props.maxData}
                       className={props.invalidMaxValue}/>
            </div>
            <span className='button'>start value:</span>
            <div>
                <input type="number"
                       onChange={changeStartValue}
                       disabled={props.startInputSwitch}
                       value={props.startData}
                       className={props.invalidStartValue}/>
            </div>
        </div>
    );
};


export default Menu;