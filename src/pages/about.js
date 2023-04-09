import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import image from './img_girl.jpg';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li className="listitems">{number}</li>
  );
  return (
    <ul className="list">{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

const About = () => {
return (
	<div className="container" style={{marginLeft:50,width: 400}}>
    <h1 className="header">
     This is About page
    </h1>

    <div className="slider-container">
      <Slider id="about-slider"/>
    </div>

    <NumberList numbers={numbers} />
    <img className="image"src={image} alt="Girl in a jacket" width="500" height="600"/>

<h1>The button Element</h1>
<button className="btn" onClick={()=>{alert('hello world')}}>Click Me!</button>
<br/>
<br/>
<label className="label" for="text-area">Review of W3Schools:</label>
<br/>
<br/>
<textarea className="text-area" id="text-area" name="text-area" rows="4" cols="50">
    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
	</div>
);
};

export default About;
