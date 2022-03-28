import React from 'react';
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/solid';
const Benefit = (props) => {
    return (
        <div>
            <p className="flex item-center"><CheckCircleIcon className="w-6 h-6 text-green-500 mr-2"></CheckCircleIcon>
        {props.benefit}</p>
        </div>
    );
};

export default Benefit;