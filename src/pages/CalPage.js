import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../components/Scroll';
import Iframe from 'react-iframe'

class CalPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <section id="two" className="wrapper style3 fade-up">
                <div className="inner">
                <h2>Get involved</h2>
                <p>
                    Check out the calendar to see upcoming events!.
                </p>
                <div>
                    <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%231ed0d0&amp;ctz=America%2FNew_York&amp;src=YnJvd2FyZGNsaW1hdGVAZ21haWwuY29t&amp;color=%23039BE5&amp;showNav=1&amp;showDate=1&amp;showPrint=1&amp;showTitle=0&amp;showCalendars=0" style="border:solid 1px #777"
                        width="100%"
                        height="500"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="center"/>
                </div>
                </div>
            </section>
        );
    }  
}

export default CalPage;


