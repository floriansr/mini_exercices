import React, { useState, useEffect } from "react";

const Pendu = () => {
	const [value, setValue] = useState("");
	const [life, setLife] = useState(5);
	const [word, setWord] = useState("");

	useEffect(() => {
		fetch("https://random-word-api.herokuapp.com/word?number=1")
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				return response;
			})
			.then((response) => {
				const result = response[0];
				setWord(result);
			});
	}, []);

	const changeValue = (e) => {
		setValue(e.target.value.toLowerCase());
	};

	const submitForm = (e) => {
		if (e.target[0].value.length === 1) {
			console.log("formulaire ok");
			checking(e.target[0].value);
			e.target[0].value = "";
		} else {
			console.log("1 seule lettre please");
			e.target[0].value = "";
		}
		e.preventDefault();
	};

	const content = (x) => {
		const indents = [];
		for (let i = 0; i < x.length; i++) {
			indents.push(
				<p className="mr" key={i}>
					_
				</p>
			);
		}
		return (
			<>
				<div className="row">{indents}</div>
			</>
		);
	};

	const checking = (checkword) => {
		const wordArray = [];
		for (let i = 0; i < word.length; i++) {
			wordArray.push(word.charAt(i));
		}
		wordArray.includes(checkword) ? showLetter() : setLife(life - 1);
	};

	return (
		<>
			<h3>LE JEU DU PENDU</h3>
			<form onSubmit={submitForm}>
				<label>
					<input type="text" value={value} onChange={changeValue} />
				</label>
				<button type="submit" onSubmit={submitForm}>
					Submit
				</button>
			</form>
			<p>Life : {life}</p>
			{content(word)}
		</>
	);
};

export default Pendu;
