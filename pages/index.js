const fs = require("fs");
const sizeOf = require('image-size');

import Image from "next/image";

import Head from 'next/head';

import home_styles from '../styles/Home.module.css';

import React, { useState, useEffect } from "react";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className={home_styles.main_div}>
				<div className={home_styles.inner_div}>
						{props.main_obj.files.map((i, t) => {
							return (
								<div key={t}>
									<Image
										width={i.width}
										height={i.height}
										src={`/img/misc/${i.filename}`}
										layout="intrinsic"
									/>
								</div>
							)
						})}
						{/* DEBUG */}
						{(process && process.env.NODE_ENV === 'development') ? console.log(props.main_obj) : <></>}
					</div>
			</main>
		</>	
	)
}

export async function getStaticProps() {

	const image_path = `public/img/misc`;
	let img_obj = {
		files: [],
	}

	let image_names = fs.readdirSync(image_path);
	{(process && process.env.NODE_ENV === 'development') ? console.log(image_names) : null;}
	for (let i = 0; i < image_names.length; i++) {
		let tmp;
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