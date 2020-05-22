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

      <main>
        <div className="top-half">
          <header>
            <div className="top-banner">
              <img src={banner} alt="fancy-banner"></img>
              <h1 className="main-headline">A future where AI and humans works hand in hand</h1>
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
          </header>

          <section className="company-culture">
            <h2 className="headline">Our Culture</h2>
            <p className="culture-description">At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process</p>

            <Culture />

            <p className="join-pitch">
              If you are excited by our vision of the future, and want ot solve meaningful problems, talk with us!
            </p>

            <button className="join-button">Join Aquors</button>

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
          <Office />
        </section>

    ``  <section className="company-investor">
          <h2 className="headline">Our Investors</h2>
          <Investor />
        </section>

        <section className="company-demo">
          <h2 className="headline">See the future</h2>
          <button className="demo-button">Get a Demo</button>
          <button className="use-case-button">Read use cases</button>
        </section>

        <footer>
          <img src={logo} alt="logo"></img>
          <div className="top-footer">
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
            <div className="footer-header">
              <h3>Contact</h3>
              <p>hello@saleswhale.com</p>
              <h4>US Office</h4>
              <p>1701 Rhode Island Ave NW Washington, DC 20036</p>
              <h4>Singapore Office</h4>
              <p>155B Telok Ayer Street</p>
            </div>
          </div>

          <div className="footer-social">
            <div className="social-container">
              <img src={facebooklogo} alt="facebook-icon"></img>
              <img src={twitterlogo} alt="twitter-icon"></img>
              <img src={linkedinlogo} alt="linkedin-icon"></img>
            </div>
            <div className="privacy-terms">
              <a className="privacy-link" href="#">Privacy</a>
              <a className="terms-link" href="#">Terms</a>
            </div>
            <p> © 2020 Saleswhale, Inc. All rights reserved.</p>
            <img src={footerwaves} alt='footer-waves'></img>
          </div>


        </footer>

      </main>



    </div>
  );
}

export default App;
