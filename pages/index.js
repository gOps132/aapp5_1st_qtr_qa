import Head from 'next/head';

import home_styles from '../styles/Home.module.css';

import React, { useState, useEffect } from "react";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>AAPP 5 QA</title>
			</Head>
			<main className={home_styles.main_div}>
				{/* map google map to the place */}
				<div>

				</div>
			</main>
		</>
	)
}