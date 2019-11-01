import React from 'react';

const Menu =(props)=> {

    let changeStartValue = (event) => {
        let value = Number(event.currentTarget.value);
        props.setStartValue(value);};

    let changeMaxValue = (event) => {
        let newValue = event.currentTarget.value;
        props.setMaxValue(newValue);}

    return (
        <div className="input">
            <span>max value</span>
            <div>
                <input type="number" onChange={changeMaxValue}
                       value={props.maxData} className={props.invalidValue}/>
            </div>
            <br/>
            <span>start value</span>
            <div>
                <input type="number" onChange={changeStartValue}
                       value={props.startData} className={props.invalidValue}
                />
            </div>
            <button onClick={props.setValue} disabled={props.isButtonSetDisabled}>Set</button>
        </div>
    );
}


export default Menu;