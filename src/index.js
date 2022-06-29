import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/dark.css'
import './assets/css/font-icons.css'
import './assets/css/colors.css'
import './assets/css/fonts.css'
import './assets/css/recipes.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)