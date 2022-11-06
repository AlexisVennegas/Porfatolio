import React from 'react';
import Lottie from "lottie-react";
import click from "../Assets/97617-click.json";



const Animation = () => {
    return (
        <div>
            <Lottie animationData={click} className='animationclick'/>
        </div>
    );
};

export default Animation;