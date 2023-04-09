import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import image from './img_girl.jpg';

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map(number => (
		<li key={number} className="listitems">
			{number}
		</li>
	));
	return (
		<ul id="about-list" className="list">
			{listItems}
		</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];

const About = () => {
	const [val, setVal] = React.useState(5);
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
		<div className="container" style={{ marginLeft: 50, width: 400 }}>
			<h1 className="header">This is About page</h1>

			<div className="slider-container">
				<div id="slider-val">{val}</div>
				<Slider
					defaultValue={5}
					min={0}
					max={10}
					id="about-slider"
					onChange={v => {
						setVal(v);
					}}
				/>
			</div>

			<NumberList numbers={numbers} />
			<img
				id="about-image"
				className="image"
				src={image}
				alt="Girl in a jacket"
				width="500"
				height="600"
			/>

			<h1>The button Element</h1>
			<button
				className="btn"
				id="about-btn"
				onClick={() => {
					setIsClicked(!isClicked);
				}}
			>
				Click Me!
			</button>
			{isClicked && <div id="about-btn-clicked-div">Button clicked</div>}
			<br />
			<br />
			<label className="label" htmlFor="text-area">
				Text area:
			</label>
			<br />
			<br />
			<form onSubmit={handleSubmit}>
				<label>
					Enter text:
					<textarea
						className="text-area"
						id="about-text-area"
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

export default About;
