import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Preview from './pages/Preview';
import Contacts from './pages/Contacts';

const App: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Preview/>,
		},
		{
			path: '/contacts',
			element: <Contacts/>
		}
	]);
	return (
		<div className="main-site-content">
			<Header />
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
