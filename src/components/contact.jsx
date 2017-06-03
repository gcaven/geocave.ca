import React from 'react';
import InlineSVG from 'react-inlinesvg';

import Title from './title';

import LinkedIn from '../assets/icons/linkedin.svg';
import Github from '../assets/icons/github.svg';
// import Twitter from '../assets/icons/twitter.svg';

class Contact extends React.PureComponent {
  render() {
    return (
      <div className="contact block" id="contact">
        <Title text={"Contact"}/>
        <div className="row">

          <div className="blurb half">
            <div className="title">
              <h2>Want to work together?</h2>
              <div className="underline"/>
            </div>
            <p>I'd love to hear from you, don't hesitate to get in touch. You can download a PDF of my resumé <a href="resume.pdf">here</a>, and find my email below.</p>
            <p>email: <a href="mailto://geoffreycaven@gmail.com">geoffreycaven@gmail.com</a></p>
          </div>

          <div className="social half">
            <div className="title">
              <h2>You can find me here</h2>
              <div className="underline"/>

              <div className="row no-collapse">
                <div className="third">
                  <a href="https://www.linkedin.com/in/geoffcaven/">
                    <InlineSVG src={LinkedIn} className="social-icon"/>
                  </a>
                </div>
                <div className="third">
                  <a href="https://github.com/gcaven">
                    <InlineSVG src={Github} className="social-icon"/>
                  </a>
                </div>
                {/* <div className="third">
                  <a href="https://twitter.com/geoffcaven">
                    <InlineSVG src={Twitter} className="social-icon"/>
                  </a>
                </div> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
