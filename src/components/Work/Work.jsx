import { useRef, useState, useEffect } from "react";
import "./work.scss";
import WBR from "../../assets/img/wbr-snapshot.jpg";
import AAC from "../../assets/img/aac-snapshot.jpg";

export default function Acting() {
	return (
		<section id="work" className="work-section home-section ">
			<h2>Websites</h2>
			<div className="website-gallery">
				<div className="website-container">
					<div className="website-about">
						<h3>Williford Brothers Racing</h3>
						<p>
							A website for a sailing partnership's olympic campaign for Paris
							2028.
						</p>
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
						<h3>Sara Rogers Acting Coach</h3>
						<p>
							I built this website for my first acting coach and mentor. Shout
							out to you Sara! You've been an instrumental part of my growth as
							a man and actor. Hope to make you proud!
						</p>

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
