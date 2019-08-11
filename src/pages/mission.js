import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import pic4 from '../images/pic04.jpg';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <h1 className="major">Mission</h1>
          <p>
            Our goal is to educate Broward citizens on the science of climate change and the effects on all aspects of our communities and agitate them into action to create political will for systemic reform. We engage in a {' '} <a href="https://www.huffpost.com/entry/love-as-a-radical-political-act_b_59610be3e4b0cf3c8e8d590f">politics of love</a> in which we prioritize community building and outreach to engage populations that are worst effected by climate change.
            <br /> <br />
            We will add more to our community platform soon. 
          </p>
          <h2>WHY WE EXIST</h2>
          <p>
            Our founders realized that climate activists and organizers didn't have a large network to pull resources and people from to mobilize. This inter-organizational coalition is important to show cohesion between different activist groups with the same goals 
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
