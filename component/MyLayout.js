import React, {useState} from 'react';
import Link from "next/link";
import Header from "../comps/Header";

const layoutStyle = {
	margin : 20,
	padding : 20,
	border : '1px solid #e3e3e3'
};


function MyLayout(props) {
	const {className} = props;
	return (
			<div style={layoutStyle}>
				<Header/>
			</div>
			);
}


export default MyLayout;