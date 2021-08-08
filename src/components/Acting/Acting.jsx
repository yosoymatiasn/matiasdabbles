import { useRef, useState, useEffect } from "react";
import "./acting.scss";
import { FaMapMarkedAlt, FaExpand } from "react-icons/fa";
import Serious from "../../assets/img/hs-serious.jpg";
import Happy from "../../assets/img/hs-happy.jpg";

export default function Acting() {
	return (
		<section id="media" className="acting-section home-section full-width">
			<div className="acting-rows">
				<div className="acting-row">
					<h2>
						Headshots <span className="divider"></span>
					</h2>
					<div className="gallery">
						<div className="headshot-card">
							<div className="expand">
								<FaExpand />
							</div>
							<img src={Happy} alt="" />
							<div className="back creds">
								<a href="https://www.chrisheadshots.com/">Chris Headshots</a>
								<p>
									<FaMapMarkedAlt /> Fort Lauderdale, FL
								</p>
							</div>
						</div>
						<div className="headshot-card">
							<div className="expand">
								<FaExpand />
							</div>
							<img src={Serious} alt="" />
							<div className="back creds">
								<a href="https://www.chrisheadshots.com/">Chris Headshots</a>
								<p>
									<FaMapMarkedAlt /> Fort Lauderdale, FL
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="acting-row">
					<h2 className="align-right">
						Clips <span className="divider float-right"></span>
					</h2>
					<div className="gallery">
						<div className="video-container">
							<div className="iframe-container">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/QlICqzo1jCk"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
