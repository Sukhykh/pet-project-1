import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './assets/scss/general/_normalize.scss';
import './assets/scss/general/_reset.scss';
import './assets/scss/general/_basic.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
