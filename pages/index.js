// const fs = require("fs");
// const sizeOf = require('image-size');

import Head from 'next/head';
import Image from 'next/image';

import home_styles from '../styles/Home.module.css';
import image_styles from '../styles/Image.module.css';

import React, { useState, useEffect } from "react";

import Confetti from 'confetti-react';

export default function Home(props) {
	// let [tick, useTick] = useState(0);
	// let [image, useImage] = useState(props.main_obj.files[0]);

	// useEffect(() => {
	// 	useImage(props.main_obj.files[tick]);
	// 	setInterval(() => {
	// 		useImage(props.main_obj.files[tick]);
	// 		if (tick == props.main_obj.files.length-1) {
	// 			useTick(0)
	// 		} else {
	// 			useTick(tick++);
	// 		}
	// 		console.log(tick);
	// 	}, 3000);
	// }, []);

	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		let handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<Confetti width={windowSize.width} height={windowSize.height} />
			<Head>
				<title>Welcome Home Presentation</title>
				<meta name="welcome home presentation" content="made with nextjs" />
			</Head>
			<main className={home_styles.main_div}>
				<div className={`${home_styles.section_01}`}>
					<h1>WELCOME HOME PAPA!</h1>
				</div>
				<div className={image_styles.image_border_circle}>
					<Image
						src="/img/01.png"
						width={400}
						height={400}
						layout="fixed"
					/>
				</div>
			</main>
		</>
	)
}

// export async function getStaticProps() {
// 	const image_path = "public/img/background";

// 	let img_obj = {
// 		files: [],
// 	}

// 	let image_names = fs.readdirSync(image_path);
// 	console.log(image_names);
// 	for (let i = 0; i < image_names.length; i++) {
// 		let m_width = sizeOf(`${image_path}/${image_names[i]}`).width;
// 		let m_height = sizeOf(`${image_path}/${image_names[i]}`).height;
// 		img_obj.files.push({
// 			filename: image_names[i],
// 			width: Math.round(m_width),
// 			height: Math.round(m_height),
// 		});
// 	}

// 	return {
// 		props: {
// 			main_obj: img_obj
// 		},
// 		revalidate: 60
// 	}
// }