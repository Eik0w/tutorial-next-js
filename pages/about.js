import axios from "axios";
import AboutPage from "../component/AboutPage";

const page = (props) => <AboutPage ajax={props.show}/>;

page.getInitialProps = async function() {
	const res = await axios.get(`api/hello`);
	const show = await res.data;

	console.log(show);

	return {
		show
	}
};

	export default page;