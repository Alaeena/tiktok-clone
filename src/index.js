import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter([
    {
        path: '/*',
        element: (
            <GlobalStyles>
                <App />
            </GlobalStyles>
        ),
    },
]);
root.render(<RouterProvider router={router} />);

reportWebVitals();
