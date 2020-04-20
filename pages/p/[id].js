import { useRouter } from 'next/router';
import Layout from '../../component/MyLayout';
import withLayout from "../../hoc/withLayout";


function Post() {
	const router = useRouter();

	return (
			<>
				<h1>{router.query.id}</h1>
				<p>This is the blog post content.</p>
			</>
	);
}

export default Post;