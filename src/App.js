import React, { Component } from 'react';
import './App.css';

import shortid from 'shortid'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

const links = [
  { id: shortid.generate(), path: '/', name: 'Home' },
  { id: shortid.generate(), path: '/about', name: 'About' },
  { id: shortid.generate(), path: '/casestudies', name: 'Case Studies' },
  { id: shortid.generate(), path: '/portfolio', name: 'Portfolio' },
  { id: shortid.generate(), path: '/blog', name: 'Blog' },
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            {links.map(link => (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
