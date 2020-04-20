import React, {useState} from 'react';
import axios from "axios";


function AboutPage(props) {
	console.warn(props);
	return (<div className="tasoeur">
		Coucou je suis about {props.ajax.text}
	</div>);
}




export default AboutPage;