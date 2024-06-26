import React, { useState } from 'react';
import './Slider.css';
import pdficon from './Images/icon_pdf.png';

const LessonsLearntSlider = ({ toggleSlider }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h2>Enter the Information<br/>about lessons learnt</h2>
            <div className='lesson-content'>
                <div className='lesson-title'>
                    <h6>TITLE OF LESSONS LEARNT*</h6>
                    <input type='text' className='lessons-input' placeholder='Enter the name of the lesson'/>
                </div>
                <div className='lesson-upload'>
                    <h6>UPLOAD FILE*</h6>
                    <div className="upload-box">
                        <div className="upload-icon"></div>
                        <p>Tap on this box to<br/>Upload PDF from device</p>
                        <button className="browse-button">BROWSE</button>
                    </div>
                </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h2>Information to be<br/>shared with?</h2>
            <div className='lesson-content'>
                <div className='team-names'>
                    <h6>MEMBERS/TEAMS*</h6>
                    <div className='team-buttons'>
                        <button className="team-button">ALL TEAMS</button>
                        <button className="team-button">ADMINISTRATION TEAM</button>
                        <button className="team-button">FACILITY TEAM</button>
                        <button className="team-button">OPERATIONS TEAM</button>
                    </div>
                </div>
                <div className='team-input'>
                    <h6>COPY TO*</h6>
                    <select className='lessons-input'>
                        <option></option>
                    </select>
                </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-slider">
      <div className="slider-header">
        <button className="back-btn" onClick={toggleSlider}></button>
        <h2>New Lessons Learnt</h2>
        <button className="close-button" onClick={toggleSlider}></button>
      </div>
      <div className='main-area'>
        <div className="progress-bar">
          {[...Array(2)].map((_, index) => (
            <div key={index} className={`progress-step ${step === index + 1 ? 'active' : ''}`}></div>
          ))}
        </div>
        <div className="content-container">
          {renderStep()}
        </div>
        <div className="slider-footer">
          <button className="back-button" onClick={handleBack}>Back</button>
          <button className="nxt-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default LessonsLearntSlider;
