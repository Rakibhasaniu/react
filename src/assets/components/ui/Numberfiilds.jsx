import React from 'react';

const Numberfiilds = ({ value, onChange }) => {
    const style = {
        padding: '0.25rem 1rem',
        borderRadius: '0.1rem',
        border: '1px solid gray',
        background: '#fff',
        outline: none
    }
    return <input style={style} type="number" name="" id="" value={value} onChange={onChange} />
};

export default Numberfiilds;