import "assets/scss/styles.scss";

import React, { Component } from "react";
import LowerCase from "components/LowerCase";
import Pendu from "components/Pendu";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<Pendu />
			</>
		);
	}
}

export default App;
