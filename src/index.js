import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ContextFunction from './Context/Context';

import AllRouteWrap from './Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextFunction>
        <AllRouteWrap />
    </ContextFunction>
    
  </React.StrictMode>
);


