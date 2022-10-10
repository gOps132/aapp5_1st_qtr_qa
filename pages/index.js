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
					//todo make nice homepage
					
					<br></br>Happy Bday to X
					<br></br>location on Bai hotel on blah blah
				</div>
			</main>
		</>	
	)
}