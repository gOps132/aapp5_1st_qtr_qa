// const fs = require("fs");
// const sizeOf = require('image-size');

import Head from 'next/head';

import home_styles from '../styles/Home.module.css';

import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

export default function Home(props) {

	const AnyReactComponent = ({ text }) => <div>{text}</div>;

	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627
		},
		zoom: 11
	  };

	return (
		<>
			<Head>
				<title>AAPP 5 QA</title>
				<meta name="" content="made with nextjs" />
			</Head>
			<main className={home_styles.main_div}>
				{/* map google map to the place */}
				<div style={{ height: '90vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<AnyReactComponent
						lat={59.955413}
						lng={30.337844}
						text="My Marker"
					/>
				</GoogleMapReact>
				</div>
			</main>
		</>
	)
}