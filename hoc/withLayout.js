import Header from "../comps/Header";
import React from "react";


const layoutStyle = {
	margin : 20,
	padding : 20,
	border : '1px solid #e3e3e3'
};


const withLayout = Page => {



	return () => (
			<div style={layoutStyle}>
				<Header/>
				<Page {...this.props} />
			</div>
	)
}

withLayout.getInitialProps = async function () {
	// Check if Page has a `getInitialProps`; if so, call it.
	const pageProps = Page.getInitialProps && await Page.getInitialProps(ctx);
	// Return props.
	return { ...pageProps, userAgent }
};


export default withLayout;