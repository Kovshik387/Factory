import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Preview from './pages/Preview';
import Contacts from './pages/Contacts';
import Catalog from './pages/Catalog';

const App: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Preview/>,
		},
		{
			path: '/contacts',
			element: <Contacts/>
		},
		{
			path: "/catalog",
			element: <Catalog/>
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
