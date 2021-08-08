import "./intro.scss";
import { FaInstagram, FaFilm } from "react-icons/fa";
import introHeadshot from "../../assets/img/headshot.png";

export default function Intro() {
	return (
		<section className="intro-container">
			<div className="background-img"></div>
			<div className="intro-heading">
				<h1>
					<span>Matias Agnese</span>
				</h1>
				<div className="divider"></div>
				<h1>Actor - Web Creator</h1>
				{/* <div className="divider"></div>
				<h1>Thanks for stopping by!</h1> */}
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
