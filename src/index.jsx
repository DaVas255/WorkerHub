import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './app/styles/fonts/stylesheet.scss';
import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
