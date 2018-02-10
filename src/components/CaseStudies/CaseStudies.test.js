import React from 'react';
import ReactDOM from 'react-dom';
import CaseStudies from './CaseStudies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaseStudies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
