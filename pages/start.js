import Image from 'next/image';
import React from 'react';

function Start() {
  return (
    <div className='pogo'>
      <div className='pogo1'>
        <div className="logo">
          <span>Better</span> Mortgage
        </div>
        <div className="user-info">
          <Image src="/images/girl.jpeg" alt="User" className="user-image" width={500} height={500} />
          <div className="help-number">
            <span>Need help? Call (415) 523 8837</span>
          </div>
        </div>
      </div>
      <div className="HelpSection">
        <h1>Hi, I am Betty! What can I help you with?</h1>
        <div className="options">
          <button className="option-button">
            <i className="icon home-icon"></i> Buying a home
          </button>
          <button className="option-button">
            <i className="icon refinance-icon"></i> Refinance my mortgage
          </button>
          <button className="option-button">
            <i className="icon cash-icon"></i> Get cash from my home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
