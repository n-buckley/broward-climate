import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../components/Scroll';

class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <section id="intro" className="wrapper style1 fullscreen fade-up">
                <div className="inner">
                <h1>Broward Climate Alliance</h1>
                <p>
                    Broward Climate Alliance is a coaliton of many organizations with the same goals: to educate citizens about the current climate situation and generate political will for climate action.
                    <br />
                    This year is it's inagural year as members found a lacking amount of communication between organizers. 
                </p>
                <ul className="actions">
                    <li>
                    <Scroll type="id" element="one">
                        <a href="#one" className="button">
                        Learn more
                        </a>
                    </Scroll>
                    </li>
                </ul>
                </div>
            </section>
        );
    }  
}

export default LandingPage;