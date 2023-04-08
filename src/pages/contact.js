import React from 'react';
import image from './img_girl.jpg';
export const Checkbox = () => {
  return (
    <div>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">I agree to Terms of Service </label>
    </div>
  )
}

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


const Contact = () => {
return (
	<div>
	  <h1>Mail us on feedback@geeksforgeeks.org</h1>
    <Checkbox/>

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

export default Contact;
