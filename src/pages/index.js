import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

import LandingPage from './LandingPage';
import MissionPage from './MissionPage';

import CalPage from './CalPage.js';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <LandingPage />
      <MissionPage />
      <CalPage />

      

      

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <p>
            Do you have an event you want us to feature or are you and organization that would like to be a member? Shoot us an email.
          </p>
          <div>
            <section>
              <ul className="contact">
                <li>
                  <h3>Email</h3>
                  <a href="mailto:browardclimate@gmail.com">browardclimate@gmail.com</a>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="https://www.facebook.com/BrowardClimateAlliance" target="_blank" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/browardclimatealliance" target="_blank" className="fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://bit.ly/33pFizx" target="_blank" className="fa-slack"><span className="label">Slack</span></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
