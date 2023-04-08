import React from 'react';
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
	</div>
);
};

export default Contact;
