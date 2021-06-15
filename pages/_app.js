import '../styles/globals.css';

import Nav from "../components/nav";
import Scbtn from "../components/scroll_to_top";
import Footer from "../components/footer";

import React, { useState, useCallback } from "react";

function MyApp({ Component, pageProps }) {
	// starts with light
	const theme_map = {
		light: 'dark',
		solar: 'light',
		dark: 'solar'
	};


	let [currentTheme, useTheme] = useState(
		(Object.keys(theme_map)[0]));

	const toggle_theme = useCallback(() => {
		useTheme(theme_map[currentTheme]);
	});

	return (
		<div className={currentTheme}>
			<Nav theme={currentTheme} theme_callback={toggle_theme} theme_map={theme_map} />
			<false_body></false_body>
			<article>
				<div className={`inner_root`}>
					<Component {...pageProps} />
				</div>
				<Footer />
			</article>
			<Scbtn/>
		</div>
	)
}

export default MyApp