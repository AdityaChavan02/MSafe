import React, { useState } from 'react';
import './Slider.css';
import areamap from './Images/area_map.png';
import bodyimg from './Images/body.png';
import pointer from './Images/pointer.png';
import imgicon from './Images/icon_img.png';

const NearMissSlider = ({ toggleSlider }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h2>Severity</h2>
            <button className="step-button">HIGH</button>
            <button className="step-button">MEDIUM</button>
            <button className="step-button">SLIGHT</button>
            <button className="step-button">NORMAL</button>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h2>Type of Near Miss</h2>
            <button className="step-button">FIRE</button>
            <button className="step-button">THEFT</button>
            <button className="step-button">PROPERTY DAMAGE</button>
            <button className="step-button">INJURY</button>
            <button className="step-button">SAFETY</button>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h2>More Details</h2>
            <textarea className="description" placeholder="Enter more details"></textarea>
            <div className="upload-section">
              <div className="upload-box">Max. 5 images allowed</div>
              <div className="upload-box">Max. 1 video (60 sec)</div>
            </div>
            <div className="uploaded-files">
              <div className="file-item">DSC-01123.JPG</div>
              <div className="file-item">DSC-01123.mp4</div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <h2>Where it happened?</h2>
            <select className="location-dropdown">
              <option>Engine Shop</option>
              {/* Add more options as needed */}
            </select>
            <div className="map-container">
              <img src={areamap} alt="Map" className="map-image"/>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step-content">
            <h2>Select date and time</h2>
            <div className="date-time-picker">
              <input type="number" placeholder="DD" className="date-input"/>
              <input type="number" placeholder="MM" className="date-input"/>
              <input type="number" placeholder="YYYY" className="date-input"/>
            </div>
            <div className="time-picker">
              <input type="number" placeholder="HH" className="time-input"/>
              <input type="number" placeholder="MM" className="time-input"/>
              <select className="time-input">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="step-content">
            <h2>Where it is?</h2>
            <div className="body-map">
              <img src={bodyimg} alt="Body Map" className="body-map-image"/>
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
        <button className="back-btn" onClick={() => {toggleSlider();}}></button>
        <h2>Add Near Miss</h2>
        <button className="close-button" onClick={() => {toggleSlider();}}></button>
      </div>
      <div className='main-area'>
        <div className="progress-bar">
          {[...Array(6)].map((_, index) => (
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

export default NearMissSlider;
