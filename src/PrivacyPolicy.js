import React from 'react';
import './App.css'; 
import logo from './Logo 512px.png'; 
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="App"> 
      <div className="privacy-header">
        <div className="privacy-header-left">
          <img src={logo} alt="PoliTorium Logo" className="brand-logo" />
          <span className="brand-text">PoliTorium</span>
        </div>
        <Link to="/" className="home-button">
          Go to Home
        </Link>
      </div>

      <div className="privacy-title-section">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: April 14, 2025</p>
      </div>

      <div className="privacy-content-section">
        <p className="privacy-intro">At PoliTorium, your privacy is our priority. This Privacy Policy describes how we collect, use, protect, and share your personal information. By using PoliTorium, you agree to these practices.</p>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <div className="subsection">
            <h3>1.1 Information You Provide</h3>
            <p>When you use PoliTorium, you may provide:</p>
            <ol className="numbered-list">
              <li>Account Information: Name, email, username, password, date of birth, profile picture, and bio.</li>
              <li>Content: Posts, comments, messages, and other materials you share.</li>
              <li>Preferences and Settings: Notification settings, language preferences, and customizable features.</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>1.2 Automatically Collected Information</h3>
            <p>As you use PoliTorium, we automatically collect:</p>
            <ol className="numbered-list">
              <li>Usage Data: Pages visited, interaction times, features used, and links clicked.</li>
              <li>Behavioral Data: Engagement patterns with content and activities.</li>
              <li>Device Information: IP address, browser type, operating system, device IDs, and network information.</li>
              <li>Approximate Location: Based on IP address or device settings (with consent).</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>1.3 Third-Party Information</h3>
            <p>We may receive data from:</p>
            <ol className="numbered-list">
              <li>Social Media Platforms: If you link external accounts, we access your public profile information.</li>
              <li>Service Providers: Analytics or advertising data from partners.</li>
              <li>Public Sources: Public records or publicly available information.</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>1.4 Cookies and Similar Technologies</h3>
            <p>We use cookies and similar technologies to personalize your experience and improve our services. You can manage cookies through your browser settings.</p>
          </div>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Information</h2>
          <div className="subsection">
            <h3>2.1 Service Improvement</h3>
            <ol className="numbered-list">
              <li>Provide and maintain platform functionality.</li>
              <li>Tailor content and recommendations.</li>
              <li>Enhance platform features and user experience.</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>2.2 Communication</h3>
            <ol className="numbered-list">
              <li>Respond to user support inquiries.</li>
              <li>Send updates, notifications, and important administrative messages.</li>
              <li>Communicate marketing information (if opted-in).</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>2.3 Safety and Security</h3>
            <ol className="numbered-list">
              <li>Prevent fraud, abuse, and harmful behavior.</li>
              <li>Enforce compliance with policies.</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>2.4 Legal Compliance</h3>
            <ol className="numbered-list">
              <li>Comply with applicable laws and respond to lawful requests by authorities.</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>2.5 Behavioral Data Analysis</h3>
            <ol className="numbered-list">
              <li>Aggregate user insights for research, analytics, and marketing, excluding personal identifiers.</li>
            </ol>
          </div>
        </section>
        
        <section className="policy-section">
          <h2>3. Information Sharing</h2>
          <p>We share your data responsibly and transparently:</p>
          <div className="subsection">
            <h3>3.1 Service Providers</h3>
            <p>We partner with providers for hosting, data analysis, customer support, and marketing, with strict confidentiality obligations.</p>
          </div>
          <div className="subsection">
            <h3>3.2 Business Transfers</h3>
            <p>Your information may transfer during mergers, acquisitions, or asset sales, and you'll be notified of such changes.</p>
          </div>
          <div className="subsection">
            <h3>3.3 Legal Requirements</h3>
            <p>Disclosure if legally required or responding to valid governmental requests.</p>
          </div>
          <div className="subsection">
            <h3>3.4 Protection of Rights</h3>
            <p>Sharing information to enforce policies, and protect PoliTorium, users, and public safety.</p>
          </div>
          <div className="subsection">
            <h3>3.5 With Your Consent</h3>
            <p>Additional sharing occurs only with explicit user consent.</p>
          </div>
        </section>

        <section className="policy-section">
          <h2>4. Data Retention</h2>
          <div className="subsection">
            <h3>4.1 Retention Periods</h3>
            <ol className="numbered-list">
              <li>Personal Data: Retained during account activity or as necessary for legal obligations.</li>
              <li>Behavioral Data: Aggregated/anonymized data may be stored indefinitely.</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>4.2 Account Deletion</h3>
            <p>Upon account deletion request, personal data is removed, though anonymized data may remain for research purposes.</p>
          </div>
          <div className="subsection">
            <h3>4.3 Account Deletion Process</h3>
            <p>Log in to your account &gt; Navigate to settings &gt; Find "Delete Account" on the bottom of the settings screen &gt; Select "Delete Account" &gt; Confirm Account Deletion.</p>
          </div>
        </section>

        <section className="policy-section">
          <h2>5. Security</h2>
          <p>We implement security measures such as encryption, access control, and system monitoring. However, no digital method is entirely secure. Users should safeguard credentials and report suspicious activities immediately.</p>
        </section>

        <section className="policy-section">
          <h2>6. Children's Privacy</h2>
          <p>PoliTorium is not intended for users under age 17. If we discover such data collection, we will delete it immediately. Parents or guardians can request data deletion if needed.</p>
        </section>

        <section className="policy-section">
          <h2>7. Your Privacy Choices</h2>
          <div className="subsection">
            <h3>7.1 Managing Your Data</h3>
            <ol className="numbered-list">
              <li>Access or update your account data through profile settings.</li>
              <li>Request account and data deletion by contacting support.</li>
            </ol>
          </div>
          <div className="subsection">
            <h3>7.2 Cookie Preferences</h3>
            <p>Manage cookie settings via your browser.</p>
          </div>
          <div className="subsection">
            <h3>7.3 Marketing Communications</h3>
            <p>Opt-out of promotional emails through "unsubscribe" links or notification preferences.</p>
          </div>
        </section>

        <section className="policy-section">
          <h2>8. Changes to This Policy</h2>
          <p>Updates to this Privacy Policy will be communicated via platform notification or email. Continued platform use after updates signifies your acceptance.</p>
        </section>
      </div>

      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-info">
             <div className="contact-section">
               <h3>Contact Us</h3>
               <p>Questions, concerns, or data requests:</p>
               <a href="mailto:support@politorium.com" className="email-link">support@politorium.com</a>
             </div>
            <div className="footer-links">
              <p className="copyright">© {new Date().getFullYear()} PoliTorium. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 