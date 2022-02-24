import React from 'react';
import './Landing.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Services from '../services/Services';
import Work from '../work/Work';
import Step_1 from '../step_1/Step_1';




export default function Landing() {
    return(
        <div className='landing'>
            <Header />
            <Main />
            <Services />
            <Work />
            <Step_1 />
        </div>
    )
}