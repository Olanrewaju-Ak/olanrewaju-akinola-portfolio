import "./App.scss";

import { About, Footer, Hero, Header, Skills, Works, Contact } from "./components";

function App() {
	return (
		<div className="App">
			<Header />

			<Hero />
			<About />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
