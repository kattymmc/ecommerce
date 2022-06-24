import { Send } from '@mui/icons-material';
import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="Newsletter">
        <h1>Newsletter</h1>
        <div className='description'>Get timely updates from your favourite products</div>
        <div className='input-container'>
            <input />
            <button>
                <Send />
            </button>
        </div>
    </div>
  );
};

export default Newsletter;