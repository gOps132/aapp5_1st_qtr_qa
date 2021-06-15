import footer_style from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={footer_style.m_footer}>
			<div className={footer_style.m_footer_elm}>
				<h2>Contacts</h2>
				<h3>School Email</h3>
				<p>giancedrick.epilan@dbtc-cebu.edu.ph</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>INFO</h2>
				<p>
					made by Gian Cedrick
				</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>Made with</h2>
				<h3>Nextjs Framework</h3>
				<p>
					<a href="https://nextjs.org/"><u>here</u></a>
				</p>
			</div>
		</div>
	);
}

export default Footer;