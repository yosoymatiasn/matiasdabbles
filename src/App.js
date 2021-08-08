import { useRef, useState, useEffect } from "react";
import "./app.scss";
import Family from "./assets/img/family.jpg";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Acting from "./components/Acting";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
	useEffect(() => {
		const lightbox = document.createElement("div");
		lightbox.id = "lightbox";
		document.body.appendChild(lightbox);
		const expandBtns = document.querySelectorAll(
			".headshot-card>.expand, .lightboxBtn"
		);
		expandBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				lightbox.classList.add("active");
				const lightboxImg = document.createElement("img");
				const image = btn.parentElement.querySelector("img");
				if (image !== null) {
					lightboxImg.src = image.src;
				} else {
					console.log({ Family });
					lightboxImg.src = Family;
				}
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
		<div className="App">
			<div className="home-container">
				<Navbar />
				<Intro />
				<About />
				<Acting />
				<Work />
				<Footer />
			</div>
		</div>
	);
}

export default App;
