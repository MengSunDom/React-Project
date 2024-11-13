import './App.css';
import {HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import RouteConfig from './router/routeConfig'
function App() {
  return (
    <Router>
      <RouteConfig />
    </Router>
  );
}

export default App;
