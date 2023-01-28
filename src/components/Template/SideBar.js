import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/ariel.png`} alt="" />
      </Link>
      <header>
        <h2>Ariel Meshorer</h2>
        <p><a href="mailto:cblappers@gmail.com">github.com/domotheawsome</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ariel. I like building things.
        I am a <a href="https://oregonstate.edu/">Oregon State University</a> CS student, future SWE, and cat enthusiast. I&apos;m a coding tutor and research assistant at OSU, and I&apos;m actively searching for a Summer 2023 SWE internship.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ariel Meshorer <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
