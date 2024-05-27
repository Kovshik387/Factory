import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import './App.css';
<<<<<<< HEAD

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
=======
import MainPage from './pages/Main';
import About from './pages/About';

const App: React.FC = () => {
	const [currentComponent, setCurrentComponent] = useState<number>(0);
	const [nextComponent, setNextComponent] = useState<number | null>(null);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const components = [<MainPage key="main" />, <About key="about"/>];
	const containerRef = useRef<HTMLDivElement>(null);

	const animationDuration = 500;

	const handleWheel = (event: WheelEvent) => {
		if (isAnimating) return;

		if (event.deltaY > 0 && currentComponent < components.length - 1) {
			setNextComponent(currentComponent + 1);
			setIsAnimating(true);
			setTimeout(() => {
				setCurrentComponent((prev) => prev + 1);
				setNextComponent(null);
				setIsAnimating(false);
			}, animationDuration);
		} else if (event.deltaY < 0 && currentComponent > 0) {
			setNextComponent(currentComponent - 1);
			setIsAnimating(true);
			setTimeout(() => {
				setCurrentComponent((prev) => prev - 1);
				setNextComponent(null);
				setIsAnimating(false);
			}, animationDuration);
>>>>>>> b70db8a21d862d80155a599ad95c64d28607b28f
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
