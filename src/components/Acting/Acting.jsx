import { useRef, useState, useEffect } from "react";
import "./acting.scss";
import { FaMapMarkedAlt, FaExpand } from "react-icons/fa";
import Serious from "../../assets/img/hs-serious.jpg";
import Happy from "../../assets/img/hs-happy.jpg";

export default function Acting() {
	useEffect(() => {
		const lightbox = document.createElement("div");
		lightbox.id = "lightbox";
		document.body.appendChild(lightbox);
		const expandBtns = document.querySelectorAll(".headshot-card>.expand");
		expandBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				lightbox.classList.add("active");
				const lightboxImg = document.createElement("img");
				const image = btn.parentElement.querySelector("img");
				lightboxImg.src = image.src;
				while (lightbox.firstChild) {
					lightbox.removeChild(lightbox.firstChild);
				}
				lightbox.appendChild(lightboxImg);
			});
		});
		lightbox.addEventListener("click", (e) => {
			if (e.target !== e.currentTarget) return;
			lightbox.classList.remove("active");
		});
	});

	return (
		<section id="media" className="acting-section home-section full-width">
			<div className="acting-rows">
				<div className="acting-row">
					<h2>Headshots</h2>
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
					<h2 className="align-right">Clips</h2>
					<div className="gallery">
						<div className="video-container">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/LHXpl2FiVQk"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
