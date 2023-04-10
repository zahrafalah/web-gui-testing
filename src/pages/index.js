import React from 'react';
import image from './img_girl.jpg';

import { NavLink as Link } from 'react-router-dom';

const Home = () => {
	const [isClicked, setIsClicked] = React.useState(false);
	const [text, setText] = React.useState('');

	const handleChange = event => {
		setText(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setText('');
	};

	return (
		<div>
			<h1>Welcome to GUI Testing Website</h1>
			<Link id="gallery-link" to="/gallery">
				Press to go to Gallery
			</Link>
			<br />
			<br />
			<img id="home-image" src={image} alt="Girl in a jacket" width="500" height="600" />

			<h1>Home button Element</h1>
			<button
				className="btn"
				id="home-btn"
				onClick={() => {
					setIsClicked(!isClicked);
				}}
			>
				Click Me!
			</button>
			{isClicked && <div id="home-btn-clicked-div">Button clicked</div>}
			<br />
			<br />
			<label id="home-label" htmlFor="text-area">
				Home text area:
			</label>
			<br />
			<br />

			<form onSubmit={handleSubmit}>
				<label>
					Enter text:
					<textarea
						className="text-area"
						id="home-text-area"
						name="text-area"
						rows="4"
						cols="50"
						value={text}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Home;
