import Head from 'next/head';

import map_styles from '../styles/Map.module.css';
import React from "react";

export default function Map(props) {

	// const embed_src = 
	// 	`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.210061523015!2d123.93425101511106!3d10.325067292628793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999aec4170521%3A0x3b2e2051106863e0!2sbai%20Hotel%20Cebu!5e0!3m2!1sen!2sph!4v1665412849640!5m2!1sen!2sph`;

		const embed_src = 
		`https://www.google.com/maps/d/embed?mid=1Hl3aKVVcmN42vAq8sqWc96z7I1ki574&ehbc=2E312F`;
	return (
		<>
			<Head>
				<title>Maps</title>
			</Head>
			<div>
				<div style={{ height: '90vh', width: '100vw' }}>
					<iframe 
						src={embed_src}
						className={map_styles.map_container_iframe}
						allowfullscreen>
					</iframe>
				</div>
				<div className={map_styles.directions_container}>
					<div className={map_styles.list_container}>
						<h1>Directions</h1>
						<li>Head east on Cebu S Rd/Natalio B. Bacalso S National Hwy</li>
						<li>Turn right toward Cebu South Coastal Rd</li>
						<li>Continue onto CSCR Tunnel</li>
						<li>Merge onto Sergio Osmeña Jr Blvd</li>
						<li>Continue onto Mandaue Causeway/Ouano Ave</li>
						<li>Destination will be on the right</li>
					</div>
				</div>
			</div>
		</>
	)
}	