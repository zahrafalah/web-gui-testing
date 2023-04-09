import React from 'react';
import image from './img_girl.jpg';
export const Checkbox = () => {
  return (
    <div className="checkbox-container">
      <input className="checkbox" type="checkbox" id="checkbox" />
      <label className="checkbox-label" htmlFor="checkbox">I agree to Terms of Service </label>
    </div>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li className="listitem">{number}</li>
  );
  return (
    <ul className="list">{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];


const Contact = () => {
return (
	<div className="container">
	  <h1 className="header" >Mail us on feedback@geeksforgeeks.org</h1>
    <Checkbox/>

    <NumberList numbers={numbers} />
    <img className="image" src={image} alt="Girl in a jacket" width="500" height="600"/>

      <h1 className="button-header">The button Element</h1>
      <button id="contact-btn" className="button" onClick={()=>{alert('hello world')}}>Click Me!</button>
      <br/>
      <br/>
      <label classname="label" for="text-area">Review of W3Schools:</label>
      <br/>
      <br/>
      <textarea className="text-area" id="text-area" name="text-area" rows="4" cols="50">

      </textarea>

	</div>
);
};

export default Contact;
