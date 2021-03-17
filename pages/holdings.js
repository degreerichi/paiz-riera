import { useRef, useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/common/nav'
import { TweenMax } from 'gsap'

export default function Holdings (){

	let column = useRef();
	let logo = useRef();
	let icon = useRef();

	useEffect(()=>{
		
		TweenMax.set(logo.current, { y: -150, opacity: 0 });
		TweenMax.to(logo.current, 1.5, { y: 0, opacity: 1, ease: "expo" });

		TweenMax.set(column.current, { y: -150, opacity: 0 });
		TweenMax.to(column.current, 1, { y: 0, opacity: 1, ease: "expo", delay: 0.15 });

		TweenMax.set(icon.current, { opacity: 0 });
		TweenMax.to(icon.current, 1, { opacity: 0.15, ease: "expo", delay: 0.5 });

	}, []);
	
    return (
        <div>
			<Head></Head>
			<Nav/>
			<div className="heading">
				<div className="heading-image">
					<img src="/gd-holdings.png" alt="" ref={logo}/>
				</div>
				<div className="heading-column">
					{/* <div>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div> */}
				</div>
				<div className="heading-column background-orange" style={{ width: "75%" }}  ref={column}>
					<img src="/gd-holdings-logo.svg" alt="" className="heading-background-image" ref={icon}/>
					{/* <img src="" alt="" className="heading-background-image"/> */}
				</div>
				<div>

				</div>
			</div>
		</div>
    );
}