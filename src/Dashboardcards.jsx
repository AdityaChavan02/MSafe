import React from 'react';
import './DashboardCards.css';

import safetyPassportImg from './Images/Safety-Passport.png';
import proactiveAssistImg from './Images/Proactive-Assist.png';
import safetyAuditImg from './Images/Safety-Audit.png';
import safetyImprovementImg from './Images/Safety-Index-Improvement.png';
import lessonsImg from './Images/Lessons-Learnt.png';
import notificationsImg from './Images/Notifications.png';
import configurationsImg from './Images/Configurations.png';
import rtarrow from './Images/arrow_rt.png';

const DashboardCards = ({setActiveComponent}) => {
  const cardsData = [
    { imgSrc: safetyPassportImg, title: 'Safety Passport' },
    { imgSrc: proactiveAssistImg, title: 'Proactive Assist' },
    { imgSrc: safetyAuditImg, title: 'Safety Audit Reporting' },
    { imgSrc: safetyImprovementImg, title: 'Safety Index Improvement Checklist' },
    { imgSrc: lessonsImg, title: 'Lessons Learnt' },
    { imgSrc: notificationsImg, title: 'Notifications' },
    { imgSrc: configurationsImg, title: 'Configurations', hasArrow: true },
  ];

  const handleNavItemClick = (itemName) => {
    setActiveComponent(itemName);
  };

  return (
    <div className="dashboard-cards-wrapper">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-cards-container">
        {cardsData.map((card, index) => (
            <div key={index} className="dashboard-card" onClick ={() => handleNavItemClick(card.title)}>
                <img src={card.imgSrc} alt={card.title} className="card-icon" />
                <div className="card-title">{card.title}
                    {card.hasArrow && <img src={rtarrow} alt="Right Arrow" className='rt-arrow'/>}
                </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default DashboardCards;
