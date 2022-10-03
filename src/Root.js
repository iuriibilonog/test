import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = props => {
  return (
    <React.Fragment>
      <Router>{props.children}</Router>
    </React.Fragment>
  );
};
export default Root;
