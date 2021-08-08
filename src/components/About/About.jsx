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
					<span className="subheading">
						Computer Science Major&nbsp;&nbsp; -----> &nbsp;&nbsp;Actor.
					</span>
				</p>
				<p>
					I'm son to two amazing American parents. My dad is from Villa
					Constitucion, Argentina and my mom is from Virgina. I am one of 4
					siblings (two older twin brothers and one younger sister). And we all
					get along great! Wanna see the{" "}
					<span className="lightboxBtn text-link">whole package</span>?
				</p>
				<p>
					Enough family talk. Here's the good stuff: I have a high passion for
					design and artistic expression. This passion has ultimately manifested
					my interest in <a href="#work">designing websites</a> and, more
					importantly, <a href="#media">acting</a>.
				</p>
				<p>
					I also have many hobbies, including: playing music, ANY sport that
					involves a ball, watching movies, photography, writing post it notes
					and sticking them onto surfaces, etc.
				</p>
				<p>
					The persuit of acting brought me to New York City in July of 2021. I'm
					very excited to grow in this absolutely wild city.
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
