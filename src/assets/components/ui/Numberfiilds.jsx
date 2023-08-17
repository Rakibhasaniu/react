import React from 'react';
import PropTypes from 'prop-types';



const Numberfiilds = ({ value, onChange, name }) => {
    const style = {
        padding: '0.25rem',
        borderRadius: '0.1rem',
        border: '1px solid gray',
        background: '#fff',

    }
    return <input style={style} type="number" id="" value={value} onChange={onChange} name={name} />
};

Numberfiilds.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Numberfiilds;