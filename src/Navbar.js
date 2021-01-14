import React, {useState, useEffect} from 'react';
import './navbar.css';
import SiteLinks from './SiteLinks';
import SocialLinks from './SocialLinks';
import {SiFacebook, SiTwitter, SiInstagram} from 'react-icons/si';
import {GiHamburgerMenu} from 'react-icons/gi';


const siteLinks = [{id:1,text:'Home'},{id:2,text:'News'},{id:3,text:'Squad'},{id:4,text:'Fixtures'},{id:5,text:'About'}];

const socialLinks = [
	{id:1,icon:<SiFacebook/>,source:'https://www.facebook.com/LiverpoolFC/',color:'rgb(23,96,161)'},
	{id:2,icon:<SiTwitter/>,source:'https://twitter.com/LFC',color:'rgb(63,165,218)'},
	{id:3,icon:<SiInstagram/>,source:'https://www.instagram.com/liverpoolfc/',color:'rgb(190,45,113)'}
	];

const Navbar = () => {
	const [navWidth,setNavWidth] = useState(window.innerWidth);
	const [navMode,setNavMode] = useState('nav-big');
	const [showSiteLinks,setShowSiteLinks] = useState(true);
	const [showSocialLinks,setShowSocialLinks] = useState(true);

	useEffect(() => {
		window.addEventListener('resize',() => setNavWidth(window.innerWidth));
		if(navWidth < 768) {
			setNavMode('nav-small');
			setShowSocialLinks(false);
			setShowSiteLinks(false);
		}
		else {
			setNavMode('nav-big');
			setShowSocialLinks(true);
			setShowSiteLinks(true);
		}	
		return () => {
			window.removeEventListener('resize',() => setNavWidth(window.innerWidth));
		}
	},[navWidth]);

	return (
		<>
			<nav className={navMode}>
				<h3 className='heading'>Liverpool F.C.</h3>
				{showSiteLinks && 
					<SiteLinks siteLinks={siteLinks}/>}
				{showSocialLinks ? 
					<SocialLinks socialLinks={socialLinks}/>
								 :
					<div className='menu-button'>
						<button type='button' onClick={() => setShowSiteLinks(!showSiteLinks)}><GiHamburgerMenu/></button>				
					</div>}
			</nav>
		</>
	);
}

export default Navbar;