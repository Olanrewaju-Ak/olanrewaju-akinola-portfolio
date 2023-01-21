import "./App.scss";

import { About, Footer, Hero, Header, Skills, Works } from "./components";

function App() {
	return (
		<div className="App">
			<Header />

			<Hero />
			<About />
			<Skills />
			<Works />

			<Footer />
		</div>
	);
}

export default App;
