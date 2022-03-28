import React from 'react';
import Benefit from '../Benifit/Benefit';

const PricingOption = (props) => {
    const {name,price,Benefits}=props.option;
    return (
        <div className="bg-white p-4 rounded-lg">
            <h2 className="bg-indigo-200 py-2 rounded text-xl font-weight-bold">{name}</h2>
            <p>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-xl font-bold text-gray-500">/month</span>
            </p>
            <div>
        <h3 className="text-xl text-left">Benefits</h3>
        {
        Benefits.map(benefit=> <Benefit benefit={benefit}></Benefit>)
        
        }


            </div>
        </div>
    );
};

export default PricingOption;