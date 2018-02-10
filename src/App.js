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

const routes = [
  { id: shortid.generate(), exact: true, path: '/', component: Home },
  { id: shortid.generate(), exact: false, path: '/about', component: About },
  { id: shortid.generate(), exact: false, path: '/casestudies', component: CaseStudies },
  { id: shortid.generate(), exact: false, path: '/portfolio', component: Portfolio },
  { id: shortid.generate(), exact: false, path: '/blog', component: Blog },
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {links.map(link => (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {routes.map(route => (
              <Route key={route.id} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
