import React from 'react';

const HistorySection = ({ histories }) => {
    return (
        <div>
            <p>History</p>
            {histories.length === 0 ? (
                <p>
                    <small>There is no history</small>
                </p>
            ) : (
                <ul>
                    {histories.map((history) => (
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
                                    restoredHistory !== null && restoredHistory === history.id
                                }
                            >
                                Restore
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HistorySection;