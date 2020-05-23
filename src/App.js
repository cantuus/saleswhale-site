import React from 'react';
import './App.css'
import logo from './images/logo.png'
import banner from './images/banner.png'
import facebooklogo from './images/facebook.png'
import twitterlogo from './images/twitter.png'
import linkedinlogo from './images/linkedin.png'
import footerwaves from './images/footer - waves.png'
import Progress from './components/OurProgress/OurProgress'
import Culture from './components/OurCulture/OurCulture'
import Office from './components/OurOffices/OurOffices'
import Investor from './components/OurInvestors/OurInvestors'

function App() {
  return (
    <div className="App">
      <div className="top-half">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <ul className="nav-links">
            <li><a href="#">Why Saleswhale</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Company</a></li>
          </ul>
          <ul className="nav-links">
            <li><a href="#">Log in</a></li>
            <li><a href="#">Get a Demo</a></li>
          </ul>
        </nav>

        <header>
          <div className="top-banner">
            <img src={banner} alt="fancy-banner"></img>
            <div className="company-mission">
              <div className="main-headline-container">
                <h1 className="main-headline">A future where AI and humans works hand in hand</h1>
              </div>
              <div className="mission-description">
                <p>At Saleswhale, we believe that the future of work is Collaborative intelligence - where machines and AI help humans fulfill their highest
                potential by automating drudgery and producing for more effective results.
            </p>
                <p>
                  AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative,
                  high impact work that creates value and inspires.
                  The result? Happier and more productive teams doing meaningful work.
            </p>
                <p>
                  Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need
                  in marketing and sales teams all across the world.
            </p>
                <p>
                  The future is where AI and humans work hand in hand, and we're here to help businesses benefit from that.
            </p>
              </div>
            </div>
          </div>
        </header>

        <section className="company-culture">
          <h2 className="headline">Our Culture</h2>
          <div className="culture-description-container">
            <p className="culture-description">
              At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process
            </p>
          </div>
          <div className="company-culture-container">
            <Culture />
          </div>

          <p className="join-pitch">
            If you are excited by our vision of the future, and want ot solve meaningful problems, talk with us!
            </p>
          <div className="button-container">
            <button className="join-button">Join Aquors</button>
          </div>
        </section>
      </div>

      <section className="company-history">
        <h2 className="headline">Our Progress</h2>
        <div className="vertical-line"></div>
        <div className="progress-list">
          <Progress />
        </div>
      </section>

      <section className="company-office">
        <h2 className="headline">Our Offices</h2>
        <div className="office-list">
          <Office />
        </div>
      </section>

      <section className="company-investor">
        <div className="investor-inner-container">
          <h2 className="headline">Our Investors</h2>
          <div className="investor-list">
            <Investor />
          </div>
        </div>
      </section>

      <section className="company-demo">
        <div className="demo-container">
          <div className="demo-inner-container">
            <h2 className="headline">See the future</h2>
            <button className="demo-button">Get a Demo</button>
            <button className="use-case-button">Read use cases</button>
          </div>
        </div>


      </section>

      <footer>
        <div className="top-footer">
          <div className="footer-logo-wrapper">
            <img className="footer-logo" src={logo} alt="logo"></img>
          </div>
          <div className="top-footer-half">
            <div className="footer-header">
              <h3>Why Saleswhale</h3>
              <ul>
                <li><a href="#">Collaborative Intelligence</a></li>
                <li><a href="#">AI Assistant Capabilities</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">User Case - Technology</a></li>
                <li><a href="#">User Case - Education</a></li>
                <li><a href="#">User Case - Events</a></li>
              </ul>
            </div>
            <div className="footer-header">
              <h3>Product</h3>
              <ul>
                <li><a href="#">AI Conversations</a></li>
                <li><a href="#">Lead Enrichment</a></li>
                <li><a href="#">Deal Intelligence</a></li>
                <li><a href="#">Workflow Integration</a></li>
              </ul>
            </div>
          </div>
          <div className="bottom-footer-half">
            <div className="footer-header">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Help Centre</a></li>
              </ul>
            </div>
            <div className="footer-header contact-info">
              <h3>Contact</h3>
              <ul>
                <li>hello@saleswhale.com</li>
              </ul>
              <h3>US Office</h3>
              <ul>
                <li>1701 Rhode Island Ave NW Washington, DC 20036</li>
              </ul>
              <h3>Singapore Office</h3>
              <ul>
                <li>155B Telok Ayer Street</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <div className="social-container">
            <div className="social-icons">
              <img src={facebooklogo} alt="facebook-icon"></img>
              <img src={twitterlogo} alt="twitter-icon"></img>
              <img src={linkedinlogo} alt="linkedin-icon"></img>
            </div>
            <div className="privacy-terms">
              <a className="privacy-link" href="#">Privacy</a>
              <a className="terms-link" href="#">Terms</a>
            </div>
          </div>
          <p> © 2020 Saleswhale, Inc. All rights reserved.</p>
          <img className="wave-image" src={footerwaves} alt='footer-waves'></img>
        </div>


      </footer>
    </div>

  );
}

export default App;
