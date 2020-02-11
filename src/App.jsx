import React from 'react';
import './App.css';
import Menu from "./comps/Menu";
import Display from "./comps/Display";
import Button from "./comps/Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: 0,
            maxValue: 5,
            startInputSwitch: false,
            maxInputSwitch: false,
            setSwitch: false,
            upSwitch: true,
            resetSwitch: false,
            invalidDisplayValues: false
        };
    }

    newStartValue = 0;

    setStartValue = (minimum) => {
        this.setState({
                startValue: minimum,
                startInputSwitch: false,
                setSwitch: false,
                maxInputSwitch: false,
                invalidDisplayValues: false,
            },
            () => {
                if (this.state.startValue <= 0 || this.state.maxValue <= 0 || this.state.startValue >= this.state.maxValue) {
                    this.setState({
                        startInputSwitch: true,
                        setSwitch: true,
                    }, () => this.saveState())
                } else {
                    this.saveState()
                }
            })
    };

    setMaxValue = (maximum) => {
        this.setState({
                maxValue: maximum,
                setSwitch: false,
                maxInputSwitch: false,
                startInputSwitch: false,
                invalidDisplayValues: false,
            },
            () => {
                if (this.state.maxValue <= 0 || this.state.startValue <= 0 || this.state.maxValue <= this.state.startValue) {
                    this.setState({
                        maxInputSwitch: true,
                        setSwitch: true
                    }, () => this.saveState())
                } else {
                    this.saveState()
                }
            })
    };


    setValue = () => {
        this.setState({
            upSwitch: false,
            resetSwitch: false,
            setSwitch: true,
            newStartValue: this.state.startValue
        }, () => {
            this.saveState()
        })
    };

    componentDidMount() {
        this.restoreState()
    };

    saveState = () => {
        let stateToString = JSON.stringify(this.state);
        localStorage.setItem('store', stateToString)
    };

    restoreState = () => {
        let state = {}, stringToState = localStorage.getItem('store');
        if (stringToState != null) {
            state = JSON.parse(stringToState)
        }
        this.setState(state)
    };

    addValue = () => {
        this.setState({
                invalidDisplayValues: false,
                newStartValue: Number(this.state.newStartValue) + 1,
                upSwitch: false,
            },
            () => {
                if (this.state.newStartValue >= this.state.maxValue) {
                    this.setState({
                            upSwitch: true,
                            invalidDisplayValues: true,
                        }
                    )
                } else {
                    this.saveState()
                }
            })
    };

    deleteValue = () => {
        this.setState({
            startValue: 1,
            maxValue: 3,
            upSwitch: true,
            startInputSwitch: false,
            maxInputSwitch: false,
            setSwitch: false,
            newStartValue: this.state.startValue,
            invalidDisplayValues: false
        }, () => {
            this.saveState()
        });
    };

    render() {
        let invalidMaxValue = this.state.maxInputSwitch ? 'maxError' : '';
        let invalidStartValue = this.state.startInputSwitch ? 'startError' : '';
        let invalidDisplayValues = this.state.invalidDisplayValues ? 'displayError' : '';
        return (
            <div className='wrapper'>
                <div className='menu'>
                    <Menu setStartValue={this.setStartValue}
                          setMaxValue={this.setMaxValue}
                          startData={this.state.startValue}
                          maxData={this.state.maxValue}
                          invalidMaxValue={invalidMaxValue}
                          invalidStartValue={invalidStartValue}
                          startInputSwitch={this.state.startInputSwitch}
                          maxInputSwitch={this.state.maxInputSwitch}/>

                    <Button setData={this.setValue} title='SET'
                            switch={this.state.setSwitch}/>
                </div>
                <div className='display'>

                    <Display startDisplay={this.state.newStartValue}
                             setSwitch={this.state.setSwitch}
                             invalidDisplayValues={invalidDisplayValues}
                             startData={this.state.startValue}
                             maxData={this.state.maxValue}
                    />

                    <div className='displayButton'>
                        <Button setData={this.addValue} title='UP'
                                switch={this.state.upSwitch}/>

                        <Button setData={this.deleteValue} title='RESET'
                                switch={this.state.resetSwitch}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
