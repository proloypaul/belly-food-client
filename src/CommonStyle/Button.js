import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <p className='commonButton'>{children}</p>
        </div>
    );
};

export default Button;