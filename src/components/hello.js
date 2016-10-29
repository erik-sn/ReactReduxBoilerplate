import React from 'react';
import { Link } from 'react-router';

const Hello = () => (
  <div>
    <h1>Hello!</h1>
    <Link to="/things">Things</Link>
  </div>
);

export default Hello;
