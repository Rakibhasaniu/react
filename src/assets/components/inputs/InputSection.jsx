import React from 'react';
import Numberfiilds from '../ui/Numberfiilds';
import PropTypes from 'prop-types';


const InputSection = ({ inputState, handleInputChange }) => {
    return (
        <div>
            <p>Inputs</p>
            <Numberfiilds

                value={inputState.a}
                onChange={handleInputChange}
                name="a"

            />
            <Numberfiilds
                value={inputState.b}
                onChange={handleInputChange}
                name="b"
            />
            {/* <input
          type="number"
          value={inputState.b}
          onChange={handleInputChange}
          name="b"
        /> */}
        </div>
    );
};
InputSection.propTypes = {
    inputState: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
}

export default InputSection;