import React, {useState} from 'react';
import Link from "next/link";
import hello from "../pages/api/hello"

const linkStyle = {
	marginRight : 15,
	color : 'red',
	display : 'block'
};

const PostLink = props => (
		<li>
			<Link href={`/post?title=${props.title}`}>
				<a>{props.title}</a>
			</Link>
		</li>
);

const PostLink2 = props => (
		<li>
			<Link href={`/p/[id]`} as={`/p/${props.id}`}>
				<a>{props.id}</a>
			</Link>
		</li>
);

function Header(props) {
	const {className} = props;
	return (<div className="iAmHeader">
		Coucou je suis le header du projet la !
		{hello.text}
		<div className={"menu"}>

			<Link href={"/"} >
				<a title={"home page"}>Home Page</a>
			</Link>
			<Link href={"/about"} >
				<a style={linkStyle} title={"about page"}>About Page</a>
			</Link>
			<ul>
				<PostLink title={"Article 1"} />
				<PostLink title={"Article 2"} />
				<PostLink title={"Article 3"} />
				<PostLink2 id={"Hello"} />
				<PostLink2 id={"Learn"} />
				<PostLink2 id={"Deploy"} />
			</ul>
		</div>
	</div>);
}


export default Header;