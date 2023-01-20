import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import Hero from "./components/hero/Hero";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Hero />
			</div>
		</BrowserRouter>
	);
}

export default App;
