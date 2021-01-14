import React from 'react';

const SiteLinks = ({siteLinks}) => {
	return (
		<>
			<div className='site-links'>
				<ul>
					{siteLinks.map((link) => {
							return <li key={link.id}><a href='www.google.com' target='_blank' rel='noopener noreferrer'>{link.text}</a></li>;
						})}
				</ul>
			</div>
		</>	
	);
}

export default SiteLinks;