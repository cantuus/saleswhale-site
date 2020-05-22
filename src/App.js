import React from 'react';
import logo from './images/logo.png'
import banner from './images/banner.png'
import Progress from './components/OurProgress/OurProgress'
import Culture from './components/OurCulture/OurCulture'
import Office from './components/OurOffices/OurOffices'

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
        <header>
          <div className="top-banner">
            <img src={banner} alt="fancy-banner"></img>
            <h1 className="headline">A future where AI and humans works hand in hand</h1>
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

        <section className="company-history">
          <Progress />
        </section>

        <section className="company-office">

        </section>

        <section>
          <Office />
        </section>




      </main>



    </div>
  );
}

export default App;
