import React from 'react';

const LInk = (props) => {
    const {name, link } = props.route
    return (
        <li className='mr-12'>
            <a href={link}>{name}</a></li>
    );
};

export default LInk;