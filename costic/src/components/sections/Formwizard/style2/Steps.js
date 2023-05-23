import React, { Component } from 'react';
import MultiStep from './react-multistep'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'

const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> }
]

const prevStyle = {}
const nextStyle = {}
class Steps extends Component {
    handleStepChange = currentStep => { };
    render() {
        return (
            <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
        );
    }
}

export default Steps;