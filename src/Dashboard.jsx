import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; 
import DashboardCards from './Dashboardcards.jsx';
import SafetyPassport from './Safetypassport.jsx';
import ProactiveAssist from './ProactiveAssist.jsx';
import SafetyAuditReporting from './SafetyAuditReporting.jsx';
import SafetyIndexImprovementChecklist from './SafetyIndexImprovementChecklist.jsx';
import LessonsLearnt from './LessonsLearnt.jsx';
import Notifications from './Notifications.jsx';
import Configurations from './Configurations.jsx';
import Users from './users.jsx';
import headbg from './Images/header_bg.jpg';
import msafelogo from './Images/Smartmsafe.png';
import userprofile from './Images/avatar.png';
import toggleIcon from './Images/hamburger.png';
import partnerlogo from './Images/partners_reverse.png';
import dashboardimg from './Images/Dashboard.png';
import safetypassportimg from './Images/Safety-Passport-White.png';
import proactiveassistimg from './Images/Proactive-Assist-White.png';
import safetyauditimg from './Images/Safety-Audit-White.png';
import safetyimprovementimg from './Images/Safety-Index-Improvement-White.png';
import lessonsimg from './Images/Lessons-Learnt-White.png';
import notificationsimg from './Images/Notifications-White.png';
import configurationsimg from './Images/Configurations-White.png';
import rtarrow from './Images/arrow_rt.png';
import usersimg from './Images/users.png';
import mapsimg from './Images/map.png';
import contractologo from './Images/Contracto-logo.png';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isConfigOpen, setConfigOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/LoginPage'); 
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNavItemClick = (itemName) => {
    if (itemName === 'Configurations') {
      setConfigOpen(!isConfigOpen);
    } else {
      setActiveComponent(itemName);
      setConfigOpen(false);
    }
  };

  const navItems = [
    {name: 'Dashboard', iconSrc: dashboardimg},
    {name: 'Safety Passport', iconSrc: safetypassportimg},
    {name: 'Proactive Assist', iconSrc: proactiveassistimg},
    {name: 'Safety Audit Reporting', iconSrc: safetyauditimg},
    {name: 'Safety Index Improvement Checklist', iconSrc: safetyimprovementimg},
    {name: 'Lessons Learnt', iconSrc: lessonsimg},
    {name: 'Notifications', iconSrc: notificationsimg},
    {name: 'Configurations', iconSrc: configurationsimg, hasArrow: true}
  ];

  const configItems = [
    {name: 'Users', iconSrc: usersimg },
    {name: 'Settings', iconSrc: mapsimg}
  ];

  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Safety Passport':
        return <SafetyPassport />;
      case 'Proactive Assist':
        return <ProactiveAssist />;
      case 'Safety Audit Reporting':
        return <SafetyAuditReporting />;
      case 'Safety Index Improvement Checklist':
        return <SafetyIndexImprovementChecklist />;
      case 'Lessons Learnt':
        return <LessonsLearnt />;
      case 'Notifications':
        return <Notifications />;
      case 'Configurations':
        return <Configurations />;
      case 'Users':
        return <Users />;
      default:
        return <DashboardCards setActiveComponent={setActiveComponent} />;
    }
  };

  return (
    <div>
      <header className="header" style={{ backgroundImage: `url(${headbg})` }}>
        <img src={toggleIcon} alt="Toggle Menu" className="toggle-icon" onClick={toggleSidebar} />
        <img src={contractologo} alt="We-Safe" className="dashboard-logo" />
        <div className="user-section">
          <img src={userprofile} alt="User" className="user-profile" />
          <button onClick={handleLogout} className="logout-button">LOGOUT</button>
        </div>
      </header>
      <div className='main-container'>
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          {navItems.map((item, index) => (
            <div key={index} className="nav-item" onClick={() => handleNavItemClick(item.name)}>
              <img src={item.iconSrc} alt={item.name} className="icon" onClick={toggleSidebar}/>
              {isSidebarOpen && <span className="nav-text">{item.name}</span>}
              {item.hasArrow && isSidebarOpen && <img src={rtarrow} alt="Right Arrow" className="rt-arrow" />}
            </div>
          ))}
          {isConfigOpen && isSidebarOpen && (
            <div className="dropdown-menu">
              {configItems.map((item, index) => (
                <div key={index} className="dropdown-item" onClick={() => handleNavItemClick(item.name)}>
                  <img src={item.iconSrc} alt={item.name} className="icon" onClick={toggleSidebar}/>
                  <span className="nav-text">{item.name}</span>
                </div>
              ))}
            </div>
          )}
          {/* <div className="sidebar-footer">
            <img src={partnerlogo} alt="Partner Logo" />
          </div> */}
        </div>
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {renderComponent()}
        </main>
      </div>

    </div>
  );
};

export default Dashboard;
