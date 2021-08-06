import "./global.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Acting from "./components/Acting";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
	const styles = {};

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
