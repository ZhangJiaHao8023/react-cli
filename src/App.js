import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MapRoute from './pages/MapRoute'
import route from './pages/route.config'
function App() {
  return (
    <BrowserRouter>
      <MapRoute route={route}></MapRoute>
    </BrowserRouter>
  );
}

export default App;
