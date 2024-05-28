import React, { createRef } from 'react';
import { Header, HeaderHandler } from './components/Header';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Preview from './pages/Preview';
import Contacts from './pages/Contacts';
import Navigation from './pages/Navigation';
import Sertificat from './pages/Sertificat';

export const headerRef = createRef<HeaderHandler>();

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
			path: '/nav',
			element: <Navigation/>
		},
		{
			path: '/sertificat',
			element: <Sertificat/>
		}
	]);
	return (
		<div className="main-site-content">
			<Header ref={headerRef}/>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
