import React, { useState } from 'react';
import './Options.css'; 
import { Link } from 'react-router-dom';

function Options() {
    const [activeOption, setActiveOption] = useState('option-1');

    const handleOptionClick = (option) => {
        setActiveOption(option);
        if (option === 'option-2') {
            console.log('Hello World'); 
        }
    };

    return (
        <div className="options">
            <Link to="/">
                <div className={`option-1 ${activeOption === 'option-1' ? 'active' : ''}`} onClick={() => handleOptionClick('option-1')}>
                    Overview
                </div>
            </Link>

            <Link to="/other">
                <div className={`option-2 ${activeOption === 'option-2' ? 'active' : ''}`} onClick={() => handleOptionClick('option-2')}>
                    Other
                </div>
            </Link>
        </div>
    );
}

export default Options;
