import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './Route/Route';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import './styles/index.css'

/*
 * index page where the project renders first. 
 * <Toaster> is used to display the copied! message.
 * <Route> is the key for all the projects
 * @var ReactDOM.Root root
 **/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route />
    <Toaster 
      reverseOrder={false}/>
  </React.StrictMode>
);

reportWebVitals();
