import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ArtifactCard({ name, img, tags, unrankedDescription, maxRankDescription }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div onClick={handleShow} className='elementCard background'>
				<p className='titles'>{name}</p>
				<img
					id={name}
					title={`${tags[0]}, ${tags[1]}`}
					className='artifactImg'
					src={require(`../assets/images/${img}`)}
					alt=''
				/>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
          <h5>Base Promotion (+1/25)</h5>
						<span>{unrankedDescription}</span>
            <hr />
            <h5>Max Promotion (+25/25)</h5>
            <span>{maxRankDescription}</span>
				</Modal.Body>
			</Modal>
		</>
	);
}
