import React, { useState } from 'react';
import { Segment, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import './Subscribe.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async () => {
        try {
            const response = await axios.post('http://localhost:3001/welcome', { email });
            setMessage(response.data);
        } catch (error) {
            setMessage('Failed to send email.');
            console.error('Error:', error);
        }
    };

    return (
        <Segment textAlign='center' className='subscribe-segment'>
            <div className='subscribe-container'>
                <p className='subscribe-text'>SIGN UP FOR OUR DAILY INSIDER</p>
                <div className='subscribe-input-button'>
                    <Input 
                        placeholder='Enter your email' 
                        className='subscribe-input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className='subscribe-button' onClick={handleSubscribe}>Subscribe</Button>
                </div>
                {message && <p>{message}</p>}
            </div>
        </Segment>
    );
};

export default Subscribe;
