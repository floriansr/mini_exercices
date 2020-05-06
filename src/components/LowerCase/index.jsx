import React, { useState } from "react";

const LowerCase = () => {
	const [value, setValue] = useState("");

	const changeValue = (e) => {
		console.log(e.target.value);
		setValue(e.target.value.toLowerCase());
	};

	const submitForm = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={submitForm}>
				<label>
					<input type="text" value={value} onChange={changeValue} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</>
	);
};

export default LowerCase;
