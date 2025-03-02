import './App.css';
import mockup from './mockup.png';
import logo from './Logo 512px.png';
import appstore from './appstore.png';
import appstoreSvg from './appstore.svg';
import posts from './1.png';
import polls from './2.png';
import petition from './3.png';
import analytics from './4.png';
import localfeed from './5.png';
import debates from './6.png';
import footerMockup1 from './footermockup.png';
import footerMockup2 from './footermockup2.png';
import downarrow from './downarrow.png';
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [selectedFeature, setSelectedFeature] = useState('Local Feed');
  
  
  const featureImages = {
    'Local Feed': posts,
    'Suggested Feed': polls,
    'Real Time Debates': debates,
    'Verified Petitions': petition,
    'Topic Specific Groups': localfeed,
    'Insightful Analytics': analytics
  };

  const featureDescriptions = {
    'Local Feed': "Stay informed on your community's political landscape, participate in discussions, and connect with others on local issues that matter to you.",
    'Suggested Feed': "Break out of the bubble—explore diverse perspectives with a feed designed to challenge your viewpoints and spark open, thoughtful conversations.",
    'Real Time Debates': "Host or join real-time debates in video, audio, or text format, with customizable rules to create structured and meaningful discussions.",
    'Verified Petitions': "Petitions are exclusive to verified users, preventing spam and fake initiatives—keeping the space clean so real movements always stand out and drive meaningful change.",
    'Topic Specific Groups': "Join dynamic groups that expose you to diverse perspectives, challenge your viewpoints, and foster respectful, open discourse.",
    'Insightful Analytics': "Gain deep understanding of your impact with detailed analytics that help you expand your reach and refine your engagement."
  };

  function duplicateArray(arr, count) {
    return Array(count).fill([...arr]).flat();
  }

  const steps = [
    {
      number: "01",
      title: "Foster Respectful Discourse",
      description: "Creating an environment where diverse viewpoints are shared with civility and mutual respect."
    },
    {
      number: "02",
      title: "Breaking Echo Chambers",
      description: "AI-powered features that encourage engagement with different perspectives."
    },
    {
      number: "03",
      title: "Reputation System",
      description: "Merit-based recognition for constructive contributions to political discussions."
    },
    {
      number: "04",
      title: "AI Tone Detection",
      description: "Advanced algorithms that help maintain respectful communication standards."
    },
    {
      number: "05",
      title: "ID Verification",
      description: "Ensuring authentic interactions while maintaining user privacy."
    },
    {
      number: "06",
      title: "Transparency Board",
      description: "Open moderation practices that build trust within the community."
    }
  ];

  // Create duplicated steps array for mobile infinite scroll
  const duplicatedSteps = [...steps, ...steps, ...steps, ...steps];

  // Render different content based on viewport width
  const renderStepsContent = () => {
    if (window.innerWidth <= 768) {
      // Mobile view with infinite scroll
      return duplicatedSteps.map((step, index) => (
        <div className="step-card" key={`${step.number}-${index}`}>
          <div className="step-icon">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ));
    } else {
      // Desktop view with normal grid
      return steps.map((step) => (
        <div className="step-card" key={step.number}>
          <div className="step-icon">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ));
    }
  };

  return (
    <>
      <div className="App">
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <div className="brand">
                <img src={logo} alt="PoliTorium Logo" className="brand-logo" />
                <span className="brand-text">PoliTorium</span>
              </div>
              <h1>The Social Platform for Respectful Political Discourse</h1>
              <p>Join a community where diverse political views meet constructive dialogue. Experience politics differently with real conversations that bridge divides and foster understanding.</p>
              <div className="cta-container">
                <div className="cta-wrapper">
                  <a href="https://apps.apple.com/us/app/politorium/id6740051311" target="_blank" rel="noopener noreferrer">
                    <img src={appstore} alt="Download on App Store" className="appstore-button" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={mockup} alt="Politorium Mockup" />
            </div>
          </div>
        </div>
        
        <div className="features-section light">
          <div className="features-content">
            <div className="section-header-row">
              <div>
                <h2 className="section-title">Core Features</h2>
              </div>
            </div>
            <div className="alternate-features">
              <div className="single-feature-image">
                <img src={featureImages[selectedFeature]} alt={selectedFeature} />
              </div>
              <div className="feature-names-container">
                <div className="feature-names-vertical">
                  {Object.keys(featureImages).map((featureName) => (
                    <React.Fragment key={featureName}>
                      <span 
                        className={`feature-name ${selectedFeature === featureName ? 'active' : ''}`}
                        onClick={() => setSelectedFeature(featureName)}
                      >
                        {featureName}
                      </span>
                      {featureName !== 'Insightful Analytics' && <span className="dot-divider">•</span>}
                    </React.Fragment>
                  ))}
                </div>
                <div className="feature-description">
                  {featureDescriptions[selectedFeature]}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="discourse-section">
          <div className="features-content">
            <div className="section-header-row">
              <div>
                <h2 className="section-title">How does PoliTorium encourage respectful discourse?</h2>
              </div>
            </div>
            <div className="steps-container">
              <div className="steps-grid">
                {renderStepsContent()}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-mockups">
              <img src={footerMockup2} alt="PoliTorium App Preview" className="footer-mockup top" />
              <img src={footerMockup1} alt="PoliTorium App Preview" className="footer-mockup bottom" />
            </div>
            <div className="footer-info">
              <div className="footer-header">
                <h2 className="section-title">Join the Movement</h2>
                <p className="footer-subtitle">Be part of a community that's reshaping political discourse.</p>
              </div>
              <div className="footer-cta">
                <a href="https://apps.apple.com/us/app/politorium/id6740051311" target="_blank" rel="noopener noreferrer" className="download-button">
                  <img src={appstore} alt="Download on App Store" className="appstore-button" />
                </a>
              </div>
              <div className="footer-links">
                <p className="copyright">© 2024 PoliTorium. All rights reserved.</p>
                <div className="legal-links">
                  <a href="/privacy">Privacy Policy</a>
                  <span className="dot-divider">•</span>
                  <a href="/terms">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
