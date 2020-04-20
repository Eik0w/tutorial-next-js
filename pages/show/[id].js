import Header from "../../comps/Header";
import axios from "axios";
import Markdown from "react-markdown";
const Show = props => (
		<>
		<Header/>
			<div className="markdown">
				<Markdown
						source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### ${props.show.name}

${props.show.summary.replace(/<[/]?[pb]>/g, '')}

${props.show.image ? `![] (${props.show.image.medium}) `: null}
      `}
				/>
			</div>


			<style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none; 
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
			</>


)

Show.getInitialProps = async function(ctx) {
	console.log(ctx);
	const {id} = ctx.query;
	const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.data;

	console.log(show);

	return {
		show
	}
};

export default Show;