import "./intro.scss";
import { FaInstagram, FaFilm } from "react-icons/fa";
import introHeadshot from "../../assets/img/headshot.png";

export default function Intro() {
	return (
		<section className="intro-container">
			<div className="background-img"></div>
			<div className="intro-heading">
				<h1>
					<span>Hi, </span>I'm Matias Agnese
				</h1>
				<div className="divider"></div>
				<h1>
					My friends say I'm not cool! So I figured I'd be an actor and... at
					least pretend.
				</h1>
			</div>
			<div className="headshot-container">
				<div className="intro-headshot">
					<img src={introHeadshot} alt="" />
					<a
						href="https://resumes.actorsaccess.com/matiasagnese"
						target="_blank"
						className="aa-icon icon"
					>
						<FaFilm />
					</a>
					<a
						href="https://www.instagram.com/matiasagnese"
						target="_blank"
						className="ig-icon icon"
					>
						<FaInstagram />
					</a>
				</div>
			</div>
		</section>
	);
}
