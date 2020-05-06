import "assets/scss/styles.scss";

import React, { Component } from "react";
import LowerCase from "components/LowerCase";
import Recette from "components/Recette";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<LowerCase />
				<Recette />
			</>
		);
	}
}

export default App;
