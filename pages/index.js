import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Nav from '../components/common/nav'
import Footer from '../components/common/footer'
import { TweenMax } from 'gsap'
const SimpleImageSlider = dynamic(() => import('react-simple-image-slider').then((a) => a.SimpleImageSlider), {ssr: false});

export default function Home() {

	let column = useRef();
	let logo = useRef();
	let icon = useRef();

	let images = [
		{ url: '/historia/1.jpg' },
		{ url: '/historia/2.jpg' },
		{ url: '/historia/3.jpg' },
		{ url: '/historia/4.jpg' }
	];

	useEffect(()=>{
		
		TweenMax.set(logo.current, { y: -150, opacity: 0 });
		TweenMax.to(logo.current, 1.5, { y: 0, opacity: 1, ease: "expo" });

		TweenMax.set(column.current, { y: -150, opacity: 0 });
		TweenMax.to(column.current, 1, { y: 0, opacity: 1, ease: "expo", delay: 0.15 });

		TweenMax.set(icon.current, { opacity: 0 });
		TweenMax.to(icon.current, 1, { opacity: 0.15, ease: "expo", delay: 0.5 });

	}, []);

	return (
		<>
			<div>
				<Head></Head>
				<Nav/>
				<div className="heading">
					<div className="heading-image">
						<img src="/paiz-riera.svg" alt="" className="" ref={logo}/>
					</div>
					<div className="heading-column background-orange" ref={column}>
						<video autoPlay muted loop className="section-background-video">
							<source src="/video/paiz-riera-fondo.mp4" type="video/mp4"/>
						</video>
						<img src="/paiz-riera-logo.svg" alt="" className="heading-background-image" ref={icon}/>
					</div>
				</div>
			</div>
			<section>
				<div className="riera-row">
					<div className="riera-column" style={{ width: "50%" }}>
						<h1>Orígenes</h1>
					</div>
					<div className="riera-column justify-content-center align-items-center position-relative overflow-hidden">
						<video autoPlay muted loop className="section-background-video" style={{ width: '200%' }}>
							<source src="/video/origenes-fondo.mp4" type="video/mp4"/>
						</video>
						<h1 className="no-before text-white">
							Un legado de <br/>
							emprendimiento <br/>
							desde 1928
						</h1>
					</div>
				</div>
			</section> 
			<section>
				<div className="riera-row">
					<div className="riera-column" style={{ width: "50%" }}>
						<h1>Historia</h1>
					</div>
					<div className="riera-column justify-content-center align-items-center position-relative overflow-hidden">
						<video autoPlay muted loop className="section-background-video" style={{ width: '300%' }}>
							<source src="/video/paiz-riera-fondo.mp4" type="video/mp4"/>
						</video>
						{/* <SimpleImageSlider images={images} width={800} height={400}/> */}
						<h1 className="no-before text-white">
							Los cimientos se <br/>
							deben al espíritu <br/>
							emprendedor. 
						</h1>
					</div>
				</div>
			</section> 
			<section>
				<div className="container">
					<div className="row">
						<div className="col-6">
							
						</div>
						<div className="col-6">
							<h1 className="mb-0">El bienestar</h1>
							<h3 className="no-before">de nuestros padres y de nuestras <br/> familias es lo más importante</h3>
							<p>Vamos a asegurarnos en buscar siempre que nuestra <strong>familia </strong>, en especial la generación antes a la nuestra, esté bien y vamos comprometernos a proveer lo que necesiten para que puedan vivir una vida plena y feliz.</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<h1 className="mb-0">El bienestar</h1>
							<h3 className="no-before">de nuestros padres y de nuestras <br/> familias es lo más importante</h3>
							<p>Vamos a asegurarnos en buscar siempre que nuestra <strong>familia </strong>, en especial la generación antes a la nuestra, esté bien y vamos comprometernos a proveer lo que necesiten para que puedan vivir una vida plena y feliz.</p>
						</div>
						<div className="col-6">
							
						</div>
					</div>
				</div>
			</section>
			<section className="position-relative">
				<video autoPlay muted loop className="section-background-video" style={{ width: '100%' }}>
					<source src="/video/fundacion-fondo.mp4" type="video/mp4"/>
				</video>
				<img src="/proximamente.svg" alt="" className="proximamente-text"/>
				<img src="/fundacion-paiz-riera-logo.svg" alt="" className="fundacion-paiz-text"/>
			</section>
			<Footer/>
		</>
	)
}
