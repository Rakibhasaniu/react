import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const OperationSection = ({ handleArithmeticOps, handleClearOps }) => {
    return (
        <div>
            <p>Operations</p>
            <Button text='+' onClick={() => handleArithmeticOps('+')} />
            {/* <button onClick={() => handleArithmeticOps('+')}>+</button> */}
            <button onClick={() => handleArithmeticOps('-')}>-</button>
            <button onClick={() => handleArithmeticOps('*')}>*</button>
            <button onClick={() => handleArithmeticOps('/')}>/</button>
            <button onClick={() => handleArithmeticOps('%')}>%</button>
            <button onClick={handleClearOps}>Clear</button>
        </div>
    );
};

export default OperationSection;