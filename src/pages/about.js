import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const About = () => {
return (
	<div style={{marginLeft:50,width: 400}}>
    <h1>
     This is About page
    </h1>
    <div >
    <Slider  />
    </div>
	</div>
);
};

export default About;
