// const fs = require("fs");
// const sizeOf = require('image-size');

import Head from 'next/head';

import home_styles from '../styles/Home.module.css';
import map_styles from '../styles/Map.module.css';

import React, { useState, useEffect } from "react";

export default function Map(props) {

	const embed_src = 
		`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.210061523015!2d123.93425101511106!3d10.325067292628793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999aec4170521%3A0x3b2e2051106863e0!2sbai%20Hotel%20Cebu!5e0!3m2!1sen!2sph!4v1665412849640!5m2!1sen!2sph`;
	return (
		<>
			<main className={map_styles.main_div}>
				<div style={{ height: '90vh', width: '100vw' }}>
					<iframe 
						src={embed_src}
						className={map_styles.map_container_iframe}
						allowfullscreen>
					</iframe>
				</div>
			</main>
		</>
	)
}