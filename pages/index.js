import { useRef, useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/common/nav'
import Footer from '../components/common/footer'
import { TweenMax } from 'gsap'

export default function Home() {

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
		<>
			<div>
				<Head></Head>
				<Nav/>
				<div className="heading">
					<div className="heading-image">
						<img src="/paiz-riera.svg" alt="" className="" ref={logo}/>
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
					<div className="heading-column background-orange" style={{ width: "70.5%" }} ref={column}>
						<img src="/paiz-riera-logo.svg" alt="" className="heading-background-image" ref={icon}/>
					</div>
					<div>

					</div>
				</div>
			</div>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-6"></div>
						<div className="col-6">
							<h2><u>Paiz Riera</u> Grupo Familiar</h2>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur accusantium voluptatibus quia minus laudantium voluptas quo animi magnam, at corporis ea inventore nesciunt vero fugit a voluptatum qui exercitationem neque dolorem! Nulla ex incidunt earum rerum aliquid, laboriosam blanditiis iure recusandae minima magnam architecto atque, nihil, necessitatibus mollitia tempore saepe cupiditate. Impedit ad eveniet voluptate quas doloribus, iusto dignissimos pariatur assumenda, asperiores dolor aliquam est vel! Autem iste maiores vitae commodi delectus soluta quis reiciendis sequi eaque consequuntur. Magni, dolores! Repellendus expedita rem ad velit asperiores sed et tempora quam debitis at ab, consequuntur similique doloribus modi. Eligendi, repellendus suscipit?</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<h2>Orígenes</h2>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur accusantium voluptatibus quia minus laudantium voluptas quo animi magnam, at corporis ea inventore nesciunt vero fugit a voluptatum qui exercitationem neque dolorem! Nulla ex incidunt earum rerum aliquid, laboriosam blanditiis iure recusandae minima magnam architecto atque, nihil, necessitatibus mollitia tempore saepe cupiditate. Impedit ad eveniet voluptate quas doloribus, iusto dignissimos pariatur assumenda, asperiores dolor aliquam est vel! Autem iste maiores vitae commodi delectus soluta quis reiciendis sequi eaque consequuntur. Magni, dolores! Repellendus expedita rem ad velit asperiores sed et tempora quam debitis at ab, consequuntur similique doloribus modi. Eligendi, repellendus suscipit?</p>
						</div>
						<div className="col-6"></div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-6"></div>
						<div className="col-6">
							<h2>Historia</h2>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur accusantium voluptatibus quia minus laudantium voluptas quo animi magnam, at corporis ea inventore nesciunt vero fugit a voluptatum qui exercitationem neque dolorem! Nulla ex incidunt earum rerum aliquid, laboriosam blanditiis iure recusandae minima magnam architecto atque, nihil, necessitatibus mollitia tempore saepe cupiditate. Impedit ad eveniet voluptate quas doloribus, iusto dignissimos pariatur assumenda, asperiores dolor aliquam est vel! Autem iste maiores vitae commodi delectus soluta quis reiciendis sequi eaque consequuntur. Magni, dolores! Repellendus expedita rem ad velit asperiores sed et tempora quam debitis at ab, consequuntur similique doloribus modi. Eligendi, repellendus suscipit?</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<h2>Fundación</h2>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur accusantium voluptatibus quia minus laudantium voluptas quo animi magnam, at corporis ea inventore nesciunt vero fugit a voluptatum qui exercitationem neque dolorem! Nulla ex incidunt earum rerum aliquid, laboriosam blanditiis iure recusandae minima magnam architecto atque, nihil, necessitatibus mollitia tempore saepe cupiditate. Impedit ad eveniet voluptate quas doloribus, iusto dignissimos pariatur assumenda, asperiores dolor aliquam est vel! Autem iste maiores vitae commodi delectus soluta quis reiciendis sequi eaque consequuntur. Magni, dolores! Repellendus expedita rem ad velit asperiores sed et tempora quam debitis at ab, consequuntur similique doloribus modi. Eligendi, repellendus suscipit?</p>
						</div>
						<div className="col-6"></div>
					</div>
				</div>
			</section>
			<Footer/>
		</>
	)
}
