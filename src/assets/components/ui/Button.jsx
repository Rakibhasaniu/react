import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ text, onClick, disabled, customStyle }) => {
    const style = {
        padding: '0.25rem',
        backgroundColor: '#ddd',
        color: '#212121',
        borderRadius: '0.10rem',
        cursor: 'pointer',
        border: 'none',
        ...customStyle,
    }
    return <button style={style} onClick={onClick} >{text}</button>
};
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    customStyle: PropTypes.object,
}
Button.defaultProps = {
    customStyle: {},
}
export default Button; 