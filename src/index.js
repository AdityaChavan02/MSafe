import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Loginpage';
import Dashboard from './Dashboard';
import SafetyPassport from './Safetypassport';
import ProactiveAssist from './ProactiveAssist';
import SafetyAuditReporting from './SafetyAuditReporting';
import SafetyIndexImprovementChecklist from './SafetyIndexImprovementChecklist';
import LessonsLearnt from './LessonsLearnt';
import Notifications from './Notifications';
import Configurations from './Configurations';
import Users from './users';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/safety-passport" element={<SafetyPassport />} />
        <Route path="/Proactive-Assist" element={<ProactiveAssist />} />
        <Route path="/Safety-Audit-Reporting" element={<SafetyAuditReporting />} />
        <Route path="/Safety-Index-Improvement-Checklist" element={<SafetyIndexImprovementChecklist />} />
        <Route path="/LessonsLearnt" element={<LessonsLearnt />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Configurations" element={<Configurations />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
