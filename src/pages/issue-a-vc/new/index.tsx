import React, {ReactNode, ReactElement, useState} from 'react';
import Layout from '../../../components/layout';
import styled from 'styled-components';
import {Title2} from '../../../utils/typography';
import {BackButton} from '../../../components/elements';
import {StepOne, StepTwo} from '../../../components/forms';

export default function CreateNewVCPage(): ReactNode {
    const [step] = useState(1);

    //state for form data
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     age: '',
    //     email: ''
    // });
    //
    // // function for going to next step by increasing step state by 1
    // const nextStep = () => {
    //     setstep(step + 1);
    // };
    //
    // // function for going to previous step by decreasing step state by 1
    // const prevStep = () => {
    //     setstep(step - 1);
    // };
    //
    // // handling form input data by taking onchange value and updating our previous form data state
    // const handleInputData = input => e => {
    //     // input value from the form
    //     const {value} = e.target;
    //
    //     //updating for data state taking previous state and then adding new value to create new object
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [input]: value
    //     }));
    // };

    return (
        <>
            <BackButton/>
            <Title2 margin="0 0 40px">Issue a new VC</Title2>
            <Form>
                <Steps>
                    <Step>1. Choose the VC holder</Step>
                    <Step>2. Fill the VC data</Step>
                    <Step>3. Sign the VC</Step>
                </Steps>
                {step === 1 ? <StepOne/> : null}
                {step === 2 ? <StepTwo/> : null}
            </Form>
        </>
    );
}

const Form = styled.div`
  width: 100%;
  height: 430px;
  border: 2px solid #5A9CFF;
  border-radius: 8px;
  padding: 30px 25px;
`;

const Steps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Step = styled.div`
  position: relative;
  color: #FFFFFF;
  font-weight: 700;
  text-align: center;
  flex: 1 1 0;
  padding-bottom: 8px;
  cursor: pointer;
  
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #0BCDED;
    opacity: 0.3;
    border-radius: 2px;
    transition: all .2s;
  }
  
  .active {
    opacity: 1;
    box-shadow: 0 1px 9px #0BCDED; 
  }
`;

CreateNewVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
