import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BodySection.css';

function BodySection() {
  return (
    <div className='hero-container'>
      
      <h1>JOIN US</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SHOP NOW
        </Button>
        
      </div>
    </div>
  );
}

export default BodySection;
