import "./navbar.scss";

export default function Navbar() {
	return (
		<div className="navbar-container">
			<div className="nav">
				<ul>
					<li className="nav--item">
						<a href="#about-me" className="nav--link">
							About Me
						</a>
					</li>
					<li className="nav--item">
						<a href="#media" className="nav--link">
							Headshots / Clips
						</a>
					</li>
					<li className="nav--item">
						<a href="mailto: yosoymatiasn@hotmail.com" className="nav--link">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
