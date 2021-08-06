import { useRef, useState, useEffect } from "react";
import "./about.scss";
import USA from "../../assets/img/usa.png";
import ARG from "../../assets/img/arg.png";
import Jump from "../../assets/img/jumping.jpg";
import Land from "../../assets/img/landing.jpg";
import Run from "../../assets/img/running.jpg";

export default function About() {
	const flags = useRef(null);
	const about = useRef(null);

	useEffect(function () {
		window.addEventListener("scroll", flagsScroll);

		return () => {
			window.removeEventListener("scroll", flagsScroll);
		};
	}, []);

	function flagsScroll() {
		let diff =
			window.innerHeight / 2 - about.current.getBoundingClientRect().top;
		flags.current.querySelectorAll(".flags").forEach((element) => {
			let flagHeight = element.getBoundingClientRect().height;
			let offsetFlag = diff - flagHeight / 2;
			element.style.top = `${offsetFlag}px`;
		});
	}

	return (
		<section ref={about} id="about-me" className="about-section home-section">
			<div className="about-content">
				<h2>About Me!</h2>
				<div ref={flags} className="flags-container">
					<div className="flags flags--usa">
						<img className="main" src={USA} alt="" />
						<div className="teams"></div>
					</div>
					<div className="flags flags--arg">
						<img className="main" src={ARG} alt="" />
						<div className="teams"></div>
					</div>
				</div>
				<p>
					<span>
						Computer Science major&nbsp;&nbsp; -----> &nbsp;&nbsp;Actor.{" "}
					</span>
				</p>
				<p>
					Not the most expected pairing of disciplines, I know. To be honest,
					I'm probably one of the 100,000 people who saw movies like "La La
					Land" or "The Greatest Showman" and felt inspired to pursue the
					industry. And since I was already halfway through my CS major, I
					figured I might as well finish. It was a long couple of years, as I
					had fully made up my mind that a desk job with my eyes glued to a
					monitor wasn't in my future.
				</p>
				<p>
					This pursuit brought me to New York City in July of 2021 as the city
					is seemingly coming back to life. I'm very excited to grow, network,
					and chase oppurtunities in this insane city!
				</p>
				<p>
					Oh! And I <a href="#work">design websites</a> too :) I guess CS wasn't
					a complete waste...
				</p>
				<div className="why-not">
					<h3>Here's me catching a football, because, why not?</h3>
					<div className="photo-sequence">
						<img src={Jump} alt="" />
						<img src={Land} alt="" />
						<img src={Run} alt="" />
					</div>
				</div>
				<div className="about-block"></div>
			</div>
		</section>
	);
}
