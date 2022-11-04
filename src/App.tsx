import React from 'react';
import './App.css';
import router from './component/route/router';
import {RouterProvider} from 'react-router-dom';


/**
 * App Entry Point
 * @returns 
 */
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
