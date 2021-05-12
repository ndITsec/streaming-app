import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer__contact'>Questions? Contact Us</div>
      <div className='footer__container'>
        <div>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>
        <div>
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Informatioon</p>
        </div>
        <div>
          <p>Media Center</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Security</p>
          <p>Networking</p>
          <p>Free Courses</p>
          </div>
        <div>
          <p>Events</p>
          <p>Trainings</p>
          <p>Mentors</p>
        </div>
        <div>
          <p>Seminars</p>
          <p>Learn More</p>
          <p>Privacy</p>
        </div>
      </div>
      <div className='footer__author'>
        Made by Martin Rokanov | Copyright &copy; {year}
      </div>
    </div>
  );
};

export default Footer;