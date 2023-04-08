import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import image from './img_girl.jpg';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

const About = () => {
return (
	<div style={{marginLeft:50,width: 400}}>
    <h1>
     This is About page
    </h1>

    <div >
    <Slider  />
    </div>

    <NumberList numbers={numbers} />
    <img src={image} alt="Girl in a jacket" width="500" height="600"/>

<h1>The button Element</h1>
<button onClick={()=>{alert('hello world')}}>Click Me!</button>
<br/>
<br/>
<label for="text-area">Review of W3Schools:</label>
<br/>
<br/>
<textarea id="text-area" name="text-area" rows="4" cols="50">
    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
	</div>
);
};

export default About;
