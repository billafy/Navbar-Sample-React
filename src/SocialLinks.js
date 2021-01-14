import React from 'react';

const SocialLinks = ({socialLinks}) => {
	return (
		<>
			<div className='social-links'>
				<ul>
					{socialLinks.map((link) => {
							return (
								<li key={link.id}><a href={link.source} target='_blank' rel="noopener noreferrer" style={{color:link.color}}>{link.icon}</a></li>	
							);
						})}
				</ul>
			</div>
		</>	
	);
}

export default SocialLinks;