import React from 'react';
import image from './img_girl.jpg';

import { NavLink as Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Welcome to GUI Testing Website</h1>
			<Link id="gallery-link" to="/gallery">
				Press to go to Gallery
			</Link>
			<br />
			<br />
			<img src={image} alt="Girl in a jacket" width="500" height="600" />

			<h1>The button Element</h1>
			<button
				onClick={() => {
					alert('hello world');
				}}
			>
				Click Me!
			</button>
			<br />
			<br />
			<label id="home-label" htmlFor="text-area">
				Home text area:
			</label>
			<br />
			<br />
			<textarea id="text-area" name="text-area" rows="4" cols="50"></textarea>
		</div>
	);
};

export default Home;
