import React from 'react';
import image from './img_girl.jpg';

export const Checkbox = () => {
	return (
		<div className="checkbox-container">
			<input className="checkbox" type="checkbox" id="contact-checkbox" />
			<label className="checkbox-label" htmlFor="checkbox">
				I agree to Terms of Service{' '}
			</label>
		</div>
	);
};

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map(number => <li className="listitem">{number}</li>);
	return (
		<ul id="contact-list" className="list">
			{listItems}
		</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];

const Contact = () => {
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
		<div className="container">
			<h1 className="header">Contact Page</h1>
			<Checkbox />

			<NumberList numbers={numbers} />
			<img
				id="contact-image"
				className="image"
				src={image}
				alt="Girl in a jacket"
				width="500"
				height="600"
			/>

			<h1 className="button-header">Contact button Element</h1>
			<button
				id="contact-btn"
				className="button"
				onClick={() => {
					setIsClicked(!isClicked);
				}}
			>
				Click Me!
			</button>
			{isClicked && <div id="contact-btn-clicked-div">Contact Button clicked</div>}
			<br />
			<br />
			<label id="contact-label" classname="label" for="text-area">
				Contact text area:
			</label>
			<br />
			<br />

			<form onSubmit={handleSubmit}>
				<label>
					Enter text:
					<textarea
						className="text-area"
						id="contact-text-area"
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

export default Contact;
