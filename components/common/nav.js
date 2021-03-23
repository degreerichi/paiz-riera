import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'

const Nav = ({style})=> {

	let router = useRouter();
	let mouseWheel = useRef();

	useEffect(()=>{

		var tl = gsap.timeline({repeat: -1, repeatDelay: 4});
		tl.to(mouseWheel.current, { y: 0, duration: 0.2 });
		tl.to(mouseWheel.current, { y: 20, duration: 0.2 });
		tl.to(mouseWheel.current, { y: 0, duration: 0.2 });
		tl.play();

	}, []);

	return (
		<>
			<div className="mouse-indicator">
				<svg viewBox="0 0 37 222.5">
					<path id="mouse-wheel" ref={mouseWheel} d="M18.5,18a1.75,1.75,0,0,0,1.75-1.76V12.75a1.75,1.75,0,0,0-3.5,0v3.51A1.75,1.75,0,0,0,18.5,18Z" style={{fill: "#fff"}}/>
					<path id="mouse-shape" d="M18.5,55A18.52,18.52,0,0,0,37,36.5v-18a18.5,18.5,0,0,0-37,0v18A18.52,18.52,0,0,0,18.5,55ZM2.7,17.67C2.7,9.54,9.79,2.92,18.5,2.92S34.3,9.54,34.3,17.67V37.33c0,8.13-7.09,14.75-15.8,14.75S2.7,45.46,2.7,37.33Z" style={{fill: "#fff"}}/>
					<rect id="rectangle" x="17.16" y="71.86" width="2.7" height="150.64" style={{fill: "#fff"}}/>
				</svg>
			</div>
			<nav className={style === "dark" ? "dark" : ""}>
				<div className="links">
					<Link href="/">
						<a className={`${router.pathname === "/" ? "active" : ""}`}>Paiz Riera</a>
					</Link>
					<Link href="/delta">
						<a className={`${router.pathname === "/delta" ? "active" : ""}`}>Grupo Delta</a>
					</Link>
					<Link href="/holdings">
						<a className={`${router.pathname === "/holdings" ? "active" : ""}`}>GD Holdings</a>
					</Link>
				</div>
			</nav>
			<div className="hamburguer">
				<img src="/menu-hamburguer.svg" alt=""/>
			</div>
		</>
	);
}

export default Nav;