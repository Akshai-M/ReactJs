import React, { useState } from 'react';

const App = () => {
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const validatePassword = (value) => {
        const newErrors = [];
        if (!/[a-zA-Z]/.test(value)) newErrors.push('Include alphabets.');
        if (!/\d/.test(value)) newErrors.push('Include numbers.');
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) newErrors.push('Include special characters.');
        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    return (
        <div>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={handleChange}
                className="border p-2"
            />
            {errors.length > 0 && (
                <ul className="text-red-500 mt-2">
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
