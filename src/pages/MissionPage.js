import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../components/Scroll';

import pic1 from '../images/pic01.jpg';

class MissionPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <section id="one" className="wrapper style2 spotlights">
                <section>
                <a href="/#" className="image" alt="image">
                    <img src={pic1} alt="" data-position="center center" />
                </a>
                <div className="content">
                    <div className="inner">
                    <h2>Misson</h2>
                    <p>
                        Our mission is to creaate a communal platform to make the decentralized grassroots climate activism in Broward more communicative and aware of other local events and organizing.
                        <br /> <br />
                        Like our friends in {' '} <a href="http://miamiclimatealliance.org/">Miami</a>, our members our dedicated to equity and resillience though activating local communities through action and increasing awareness about how climate change puts all forms of justice at risk.
                    </p>
                    <ul className="actions">
                        <li>
                        <Link className="button" to="/mission">
                            Learn more
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </section>
            </section>
        );
    }  
}

export default MissionPage;

