import { useEffect, useRef, useState } from "react";
import MainPage from "./Main";
import About from "./About";

export default function Preview(): React.JSX.Element {
    const [currentComponent, setCurrentComponent] = useState<number>(0);
	const [nextComponent, setNextComponent] = useState<number | null>(null);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const components = [<MainPage key="main" />, <About key="about" />];
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
		}
	};

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.addEventListener('wheel', handleWheel);
		}

		return () => {
			if (container) {
				container.removeEventListener('wheel', handleWheel);
			}
		};
	}, [currentComponent, components.length, isAnimating]);

	const getPageStyle = (direction: string): React.CSSProperties => ({
		animation: `${direction} ${animationDuration}ms forwards`,
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
	});

	const currentStyle = getPageStyle(nextComponent !== null && nextComponent > currentComponent ? 'slideOutToTop' : 'slideOutToBottom');
	const nextStyle = getPageStyle(nextComponent !== null && nextComponent > currentComponent ? 'slideInFromBottom' : 'slideInFromTop');

	return (
		<div style={{animation: 'fadeIn 1s'}}>
			
			<div
				ref={containerRef}
				style={{ flexGrow: 1, margin: "52px 0px", height: 'calc(100vh - 82px)', overflow: 'hidden', position: 'relative' }}
			>
				<div style={!isAnimating ? {} : currentStyle}>
					{components[currentComponent]}
				</div>
				{isAnimating && nextComponent !== null && (
					<div style={nextStyle}>
						{components[nextComponent]}
					</div>
				)}
			</div>
		</div>
	);
}