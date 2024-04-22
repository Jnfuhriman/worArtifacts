import { Tooltip } from 'react-tooltip'

export default function ArtifactCard({ name, img, tags, unrankedDescription, maxRankDescription, tooltipAnchor, tooltipAnchorCall}) {

	return (
		<>
			<div id={tooltipAnchor} className='elementCard background tooltipJonas' data-tooltip-delay-show={0}>
				<p className='titles'>{name}</p>
				<img
					id={name}
					className='artifactImg'
					src={require(`../assets/images/${img}`)}
					alt=''
				/>

				<Tooltip anchorSelect={tooltipAnchorCall}>
				<div style={{ display: 'block' }}>
					<h4>{name}</h4>
					<hr />
					<h5>Base Promotion (+1/25)</h5>
					<span>{unrankedDescription}</span>
            		<hr />
            		<h5>Max Promotion (+25/25)</h5>
            		<span>{maxRankDescription}</span>
				</div>
				</Tooltip>
				
			</div>
		</>
	);
}
