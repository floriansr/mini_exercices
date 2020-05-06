import React, { useState } from "react";

const Recette = () => {
	const [name, setName] = useState("");
	const [src, setSrc] = useState("");
	const [url, setUrl] = useState("");

	const getRecette = () => {
		fetch("https://www.themealdb.com/api/json/v1/1/random.php")
			.then((response) => response.json())
			.then((response) => {
				const result = response.meals[0];
				const { strMeal, strMealThumb, strSource } = result;

				setName(strMeal);
				setSrc(strMealThumb);
				setUrl(strSource);
			});
	};

	const content = () => {
		if (name) {
			return (
				<>
					<h3>{name}</h3>
					<img src={src} alt={name} width="200px" height="200px" />
					<p>
						<a href={url} target="_blank">
							Voir source
						</a>
					</p>
				</>
			);
		}
	};

	return (
		<>
			<button type="button" onClick={getRecette}>
				Me proposer une recette (j'ai de la chance)
			</button>
			{content()}
		</>
	);
};

export default Recette;
