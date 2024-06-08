import React, { createRef } from 'react';
import { Header, HeaderHandler } from './components/Header';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Preview from './pages/Preview';
import Contacts from './pages/Contacts';
import Navigation from './pages/Navigation';
import Sertificat from './pages/Sertificat';
import Catalog from './pages/Catalog';
import Product from './pages/Product';

export const headerRef = createRef<HeaderHandler>();
const App: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: "/?:step?",
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
		},
		{
			path: "/catalog",
			element: <Catalog/>
		},
		{
			path: '/product/:id',
			element: <Product />
		}
	]);
	return (
		<div className="main-site-content">
			<Header ref={headerRef}/>
			<div style={{
				// position:'absolute',
				backgroundColor: '#00000044',
				width: '100%',
				height: '100%',
			}}>
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
