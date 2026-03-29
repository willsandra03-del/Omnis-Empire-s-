import React, { useState } from 'react';

const SovereignAssessment = () => {
    const [email, setEmail] = useState('');
    const [score, setScore] = useState(null);

    const calculateScore = () => {
        // Placeholder for score calculation logic
        const calculatedScore = Math.floor(Math.random() * 100);
        setScore(calculatedScore);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            calculateScore();
        } else {
            alert('Please enter a valid email.');
        }
    };

    return (
        <div style={{ backgroundColor: '#FFFFE0', color: '#DAA520', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h1>Empire Potential Assessment</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #DAA520' }}
                />
                <button type='submit' style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#DAA520', color: '#FFFFFF', border: 'none' }}>Calculate Score</button>
            </form>
            {score !== null && <h2>Your Empire Potential Score: {score}</h2>}
        </div>
    );
};

export default SovereignAssessment;