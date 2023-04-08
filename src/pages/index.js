import React from 'react';
import image from './img_girl.jpg'

const Home = () => {
return (
	<div>
	  <h1>Welcome to GUI Testing Website</h1>

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

export default Home;
