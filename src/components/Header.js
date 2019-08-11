import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Welcome', href: 'intro' },
        { content: 'Mission', href: 'one' },
        { content: 'Get involved', href: 'two' },
        { content: 'Get in touch', href: 'three' },
      ],
    };
  }

  render() {    
    const { tabs } = this.state;
    return (
      <header id="header">
        <nav>
          <ul>
            {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <Link type="id" element={href}>
                      <a href={`#${href}`}>{content}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

