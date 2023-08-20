import React from 'react';
import PropTypes from 'prop-types';


const History = ({ history, disabled }) => {
    return (
        <li key={history.id}>
            <p>
                Operations: {history.inputs.a} {history.operation}{' '}
                {history.inputs.b}, Result = {history.result}
            </p>
            <small>
                {history.date.toLocaleDateString()}{' '}
                {history.date.toLocaleTimeString()}
            </small>
            <br />
            <button
                onClick={() => handleRestoreBtn(history)}
                disabled={
                    disabled
                    // restoredHistory !== null && restoredHistory === history.id
                }
            >
                Restore
            </button>
        </li>
    );
};

History.propTypes = {
    history: PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputs: PropTypes.shape({
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired,
        }).isRequired,
        operation: PropTypes.string.isRequired,
        result: PropTypes.number.isRequired,
        date: PropTypes.object.isRequired,
    }),
    disabled: PropTypes.bool.isRequired,
}

History.defaultProps = {
    disabled: false,
}
export default History;