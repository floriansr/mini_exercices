import "assets/scss/styles.scss";

import React, { Component } from "react";
import Example from "components/Example";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<Example />
			</>
		);
	}
}

export default App;
