const fs = require("fs");
const sizeOf = require('image-size');

import Head from 'next/head';
import Image from 'next/image';

import home_styles from '../styles/Home.module.css';
import image_styles from '../styles/Image.module.css';

import React, { useState, useEffect } from "react";

export default function Home(props) {
	let [tick, useTick] = useState(0);
	let [image, useImage] = useState(props.main_obj.files[tick]);

	useEffect(() => {
		// run every 3 seconds
		let m_interval = setInterval(() => {
			useImage(props.main_obj.files[tick]);
			useTick(tick == 2 ? 0 : tick++);
		}, 5000);

		console.log(tick);
		return () => {
			clearInterval(m_interval);
		}
	}, [tick]);

	return (
		<>
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
						src={`/img/profile/${image.filename}`}
						width={400}
						height={400}
					/>
				</div>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const image_path = "public/img/profile";

	let img_obj = {
		files: [],
	}

	let image_names = fs.readdirSync(image_path);
	console.log(image_names);
	for (let i = 0; i < image_names.length; i++) {
		let m_width = sizeOf(`${image_path}/${image_names[i]}`).width;
		let m_height = sizeOf(`${image_path}/${image_names[i]}`).height;
		img_obj.files.push({
			filename: image_names[i],
			width: Math.round(m_width),
			height: Math.round(m_height),
		});
	}

	return {
		props: {
			main_obj: img_obj
		},
		revalidate: 60
	}
}