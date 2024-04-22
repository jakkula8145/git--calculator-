import React, { useState } from 'react';
import './App.css';

const App= () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput(prevInput => prevInput + value);
    };

    const handleClearButtonClick = () => {
        setInput('');
    };

    const handleEqualButtonClick = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="App">
            <input type="text" className="screen" value={input} readOnly />
            <div className="buttons">
                {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '/'].map((value, index) => (
                    <button key={index} className="btn" onClick={() => handleButtonClick(value)}>
                        {value}
                    </button>
                ))}
                <button className="btn-clear" onClick={handleClearButtonClick}>Clear</button>
                <button className="btn-equal" onClick={handleEqualButtonClick}>=</button>
            </div>
        </div>
    );
};

export default App;
