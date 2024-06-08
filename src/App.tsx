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
	const [headerHeight, setHeaderHeight] = React.useState<number>(0);
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
	React.useEffect(() => {
		const rezizeHandler = () => {
			setHeaderHeight(headerRef.current!.getHeader().offsetHeight)
		}
		window.addEventListener('resize', rezizeHandler)
		window.addEventListener('load', rezizeHandler)
		return () => {
			window.removeEventListener('resize', rezizeHandler)
			window.addEventListener('load', rezizeHandler)
		}
	}, [])
	console.log(headerHeight)
	return (
		<div className="main-site-content">
			<Header ref={headerRef}/>
			<div style={{
				width: '100%',
				flexGrow: 1,
				zIndex: 2,
				height: `calc(100% - ${headerHeight}px)`,
			}}>
				<div style={{overflowY: 'auto', height: '100%', zIndex: 2}}>
					<RouterProvider router={router} />
				</div>
			</div>
			<div style={{
				position: 'absolute',
				height: '100%',
				width: '100%',
				
				backgroundColor: 'rgba(0, 0, 0, 0.3)'
			}}></div>
		</div>
	);
};

export default App;