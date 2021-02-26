import React from "react";
import PropTypes from "prop-types";
import "./Cards.css";

function Card({ title, id, url, image }) {
	return (
		<div className="card text-center bg-dark animate__animated animate__fadeInUp">
			<div className="overflow">
				<img src={image} alt="image1" className="card-img-top" />
			</div>
			<div className="card-body text-light">
				<h4 className="card-title">{title}</h4>
				<div className="card-text text-secundary">
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged
					</p>
					<a
						href={url}
						target="blank"
						className="btn btn-outline-secondary rounded-0"
					>
						Go to this website
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
	image: PropTypes.string,
};

export default Card;
