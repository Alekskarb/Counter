import React from 'react';
import './App.css';

import Menu from "./comps/Menu";
import Display from "./comps/Display";
import ButtonS from "./comps/ButtonS";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: 1,
            maxValue: 5,
            newStartValue: 0,
            title: ['SET', 'UP', 'RESET'],
            buttonSwitch: false,
            inputSwitch: false,
            isDataSet: false,
            isButtonSetDisabled: false
        };}

    setStartValue = (minimum) => {

        if (minimum <= 0 || minimum >= this.state.maxValue) {
            this.setState({
                inputSwitch: true
            })
        } else {
            this.setState({
                startValue: minimum,
                inputSwitch: false
            })}}

    setMaxValue = (maximum) => {if ( this.state.maxValue !== this.state.startValue && this.state.maxValue > 0 )
        {this.setState({maxValue: maximum})}
    else {this.setState({inputSwitch: true})}};

    setValue = () => {
        this.setState({
            inputSwitch: true,
            buttonSwitch: false,
            isButtonSetDisabled: true,
            isDataSet: true,
            newStartValue: this.state.startValue
        })};

componentDidMount() {this.saveState()};
    saveState = (state) => {localStorage.setItem('state', JSON.stringify(state))}

    addValue = (values) => {if (this.state.newStartValue < this.state.maxValue)
        {this.setState({
            newStartValue: Number(this.state.newStartValue) + 1,
            buttonSwitch: false})}
    else {this.setState({buttonSwitch: true})}}

    deleteValue = () => {
        this.setState({newStartValue: this.state.startValue, buttonSwitch: true});};

    activateEditMode =()=> {
            this.setState({buttonSwitch: true});
        }

        deactivatedEditMode =()=> {if (this.state.newStartValue === this.state.maxValue)
            {this.setState({buttonSwitch: false})};
        }

   // reset

    render() {
       let invalidValue = this.state.inputSwitch ? 'mistake': '';
        return (
            <div className='wrapper'>
                <div className='menu'>
                    <Menu setStartValue={this.setStartValue}
                          setMaxValue={this.setMaxValue}
                          startData={this.state.startValue}
                          maxData={this.state.maxValue}
                          invalidValue={invalidValue}
                          setValue={this.setValue}
                          isButtonSetDisabled={this.state.isButtonSetDisabled}
                    />
                    {/*<ButtonS setData={this.setValue} title={this.state.title[0]}*/}
                    {/*         switch={this.state.buttonSwitch} isButtonSetDisabled={this.state.isButtonSetDisabled}/>*/}
                </div>
                <div className='display'>
                    <Display startDisplay={this.state.newStartValue} isDataSet={this.state.isDataSet}/>
                    <div className='button'>
                        <span>
                            <ButtonS setData={this.addValue} title={this.state.title[1]}
                                     switch={this.state.buttonSwitch} isButtonSetDisabled={this.state.isButtonSetDisabled}/>
                        </span>
                        <span>
                            <ButtonS setData={this.deleteValue} title={this.state.title[2]}
                                     switch={this.state.buttonSwitch} isButtonSetDisabled={this.state.isButtonSetDisabled}/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
