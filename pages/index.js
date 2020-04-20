import withLayout from "../hoc/withLayout";
import Link from "next/link";
import axios from "axios";
import Header from "../comps/Header";

const Index = props => {
	console.log(props);
	return (
			<>
				<Header/>
				<h1> Les séries Batman </h1>
				<ul>
					{props.shows && props.shows.map((show) => {
						return (
								<li key={show.show.id}>
									<Link href={'show/[id]'} as={`show/${show.show.id}`}>
										<a>{show.show.name}</a>
									</Link>
								</li>
						)
					})}
				</ul>
				<style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
			</>
	);
};

Index.getInitialProps = async function () {
	console.log('bonsoir');
	const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.data;

	console.log(`Show data fetched. Count: ${data.length}`);

	return {
		shows: data
	}
};

	export default Index;