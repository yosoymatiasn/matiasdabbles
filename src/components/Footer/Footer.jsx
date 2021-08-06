import "./footer.scss";
import { FaInstagram, FaFilm } from "react-icons/fa";
import AA from "../../assets/img/actorsaccess.svg";
import IG from "../../assets/img/instagram.png";
import IMDB from "../../assets/img/imdb.png";

export default function Footer() {
	return (
		<footer>
			<div className="social-links">
				<ul>
					<li>
						<a href="https://instagram.com/matiasagnese" target="_blank">
							<img src={IG} alt="" />
						</a>
					</li>
					<li>
						<a
							href="https://resumes.actorsaccess.com/matiasagnese"
							target="_blank"
						>
							<img src={AA} alt="" />
						</a>
					</li>
					<li>
						<a
							className="text-link"
							href="https://www.imdb.com/name/nm10189487/"
							target="_blank"
						>
							IMDb
						</a>
					</li>
				</ul>
			</div>

			<div className="thanks">
				<p>Thanks for the visit!</p>
			</div>

			<div className="footer-links">
				<ul>
					<li>
						<a href="#about-me" className="footer--link">
							About Me
						</a>
					</li>
					<li>
						<a href="#media" className="footer--link">
							Headshots / Clips
						</a>
					</li>
					<li>
						<a href="mailto: yosoymatiasn@hotmail.com" className="nav--link">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
