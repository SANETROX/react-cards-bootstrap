import React from "react";

import Card from "./Card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
	{
		id: 1,
		title: "Weither App",
		url: "https://xenodochial-mestorf-4784fc.netlify.app",
		image: image1,
	},
	{
		id: 2,
		title: "Task App",
		url: "https://happy-austin-2f7724.netlify.app",
		image: image2,
	},
	{
		id: 3,
		title: "Blog Freelancer",
		url: "https://epic-albattani-10a541.netlify.app",
		image: image3,
	},
];

function Cards() {
	console.log(cards);
	return (
		<div className="container d-flex justify-content-around align-items-center  vh  media">
			<div className="row">
				{cards.map((card) => (
					<div className="col-md-4 col-xs-12" key={card.id}>
						<Card
							title={card.title}
							url={card.url}
							image={card.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Cards;
