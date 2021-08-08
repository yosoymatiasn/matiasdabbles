import { useRef, useState, useEffect } from "react";
import "./work.scss";
import WBR from "../../assets/img/wbr-snapshot.jpg";
import AAC from "../../assets/img/aac-snapshot.jpg";

export default function Acting() {
	return (
		<section id="work" className="work-section home-section ">
			<h2>Web Design</h2>
			<div className="work-about">
				<div className="tools-container">{/* <h4>Tools I use:</h4> */}</div>
			</div>
			<div className="website-gallery">
				<div className="website-container">
					<div className="website-about">
						<h3>Williford Brothers Racing</h3>
						<p>
							This website is for my friends' olympic campaign for Paris 2028.
						</p>
						<div className="button no-click">Wordpress</div>
						<div className="button">
							<a target="_blank" href="https://www.willifordbrothersracing.com">
								Visit Website
							</a>
						</div>
					</div>
					<img src={WBR} alt="" />
				</div>
				<div className="website-container">
					<div className="website-about">
						<h3>Acting Coach</h3>
						<p>
							A website put together for my first acting coach and mentor, Sara
							Rogers.
						</p>
						<div className="button no-click">Webflow</div>
						<div className="button">
							<a target="_blank" href="https://www.adultactingcoach.com">
								Visit Website
							</a>
						</div>
					</div>
					<img src={AAC} alt="" />
				</div>
			</div>
		</section>
	);
}
