import { useEffect, useRef, useState } from "react";
import MainPage from "./Main";
import About from "./About";
import Contacts from "./Contacts";
import { useLocation } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

export default function Preview(): React.JSX.Element {
	const [currentComponent, setCurrentComponent] = useState<number>(0);
	const [nextComponent, setNextComponent] = useState<number | null>(null);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const components = [<MainPage key="main" />, <About key="about" />, <Contacts key="contacts" />];
	const containerRef = useRef<HTMLDivElement>(null);
	const animationDuration = 500;

	const { search } = useLocation();
	const [ paramGone, setParamGone ] = useState<boolean>(false);

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

	// const handleSwipe = ({ dir }: { dir: string }) => {
	// 	if (isAnimating) return;

	// 	if (dir === "Up" && currentComponent < components.length - 1) {
	// 		setNextComponent(currentComponent + 1);
	// 		setIsAnimating(true);
	// 		setTimeout(() => {
	// 			setCurrentComponent((prev) => prev + 1);
	// 			setNextComponent(null);
	// 			setIsAnimating(false);
	// 		}, animationDuration);
	// 	} else if (dir === "Down" && currentComponent > 0) {
	// 		setNextComponent(currentComponent - 1);
	// 		setIsAnimating(true);
	// 		setTimeout(() => {
	// 			setCurrentComponent((prev) => prev - 1);
	// 			setNextComponent(null);
	// 			setIsAnimating(false);
	// 		}, animationDuration);
	// 	}
	// };
	// const swipeHandlers = useSwipeable({
	// 	onSwipedUp: () => handleSwipe({ dir: "Up" }),
	// 	onSwipedDown: () => handleSwipe({ dir: "Down" }),
	// });
	const biggerThan920 = useMediaPredicate("(min-width: 992px)");
	useEffect(() => {
		if(!biggerThan920) {
			if(search == '?contact') location.hash = "#contact"
			return;
		}
		if (search == '?contact' && !paramGone) { 
			setCurrentComponent(2); 
			setParamGone(true);
		} 
		const container = containerRef.current;
		if (container) {
			container.addEventListener('wheel', handleWheel);
		}

		return () => {
			if (container) {
				container.removeEventListener('wheel', handleWheel);
			}
		};
	}, [currentComponent, components.length, isAnimating, paramGone, biggerThan920]);

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
		biggerThan920 ? 
		<div style={{ animation: 'fadeIn 1s', height: '100%' }}>
			<div
				ref={containerRef}
				style={{ flexGrow: 1, height: '100%', overflow: 'hidden', position: 'relative' }}
			>
				<div style={!isAnimating ? {height: '100%'} : currentStyle}>
					{components[currentComponent]}
				</div>
				{isAnimating && nextComponent !== null && (
					<div style={nextStyle}>
						{components[nextComponent]}
					</div>
				)}
			</div>
		</div>
		: <div>{components.map(item => (<div style={{margin: '0px 0px 100px'}}>{item}</div>))}</div>
	);
}
