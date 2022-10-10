// const fs = require("fs");
// const sizeOf = require('image-size');

import Head from 'next/head';

import home_styles from '../styles/Home.module.css';

import React, { useState, useEffect, useRef } from "react";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>AAPP 5 QA</title>
				<meta name="" content="made with nextjs" />
			</Head>
			<main className={home_styles.main_div}>
				{/* map google map to the place */}
			</main>
		</>
	)
}