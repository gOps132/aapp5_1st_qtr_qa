import footer_style from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={footer_style.m_footer}>
			<div className={footer_style.m_footer_elm}>
				<h2>Members</h2>
				<h3>GROUP NULL</h3>
				{/* <br></br> */}
				<p>Epilan Gian Cedrick G.</p>
				<p>Condor Chino Miguel</p>
				<p>Johann Terence Jumao-as</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>INFO</h2>
				<h3>11-VANDOR</h3>
				{/* <br></br> */}
				<p>1st Qtr AAPP QA</p>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>Made with</h2>
				<h3>Nextjs Framework</h3>
				{/* <br></br> */}
				<p>
					<a href="https://nextjs.org/"><u>here</u></a>
				</p>
			</div>
		</div>
	);
}

export default Footer;