import { useState } from "react";
import ArtifactCard from "./ArtifactCard.js";
import { Button } from "react-bootstrap";

//data
import { data } from "../assets/artifacts/data.js";

export default function MainTable() {
	const [dataToDisplay, setDataToDisplay] = useState(data);
	const [leggoDisabled, setLeggoDisabled] = useState(false);
	const [mythicDisabled, setMythicDisabled] = useState(false);
	const [marksmenDisabled, setMarksmenDisabled] = useState(false);
	const [mageDisabled, setMageDisabled] = useState(false);
	const [defenderDisabled, setDefenderDisabled] = useState(false);
	const [healerDisabled, setHealerDisabled] = useState(false);
	const [fighterDisabled, setFighterDisabled] = useState(false);

	function load(tier) {
		return dataToDisplay
			.filter((a) => a.rank === tier)
			.map((artifact) => {
				return (
					<ArtifactCard
						key={artifact.name}
						name={artifact.name}
						img={artifact.img}
						tags={artifact.tags}
						unrankedDescription={artifact.unrankedDescription}
						maxRankDescription={artifact.maxRankDescription}
					/>
				);
			});
	}

	return (
		<div className='content'>


			<div className='filters'>
				<Button
					id='mythicBtn'
					variant='info'
					onClick={() => {
						setLeggoDisabled(true);
						setDataToDisplay(null);
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("mythic"))
						);
					}}
					disabled={mythicDisabled}
				>
					Mythic
				</Button>
				<Button
					id='leggoBtn'
					variant='info'
					onClick={() => {
						setMythicDisabled(true);
						setDataToDisplay(null);
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("legendary"))
						);
					}}
					disabled={leggoDisabled}
				>
					Legendary
				</Button>
			</div>
			<div className='filters'>
				<Button
					variant='info'
					onClick={() => {
						setDefenderDisabled(true);
						setFighterDisabled(true);
						setHealerDisabled(true);
						setMageDisabled(true);
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("marksmen"))
						);
					}}
					disabled={marksmenDisabled}
				>
					Marksmen
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setMarksmenDisabled(true);
						setFighterDisabled(true);
						setHealerDisabled(true);
						setMageDisabled(true);
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("defender"))
						);
					}}
					disabled={defenderDisabled}
				>
					Defender
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setMarksmenDisabled(true);
						setDefenderDisabled(true);
						setHealerDisabled(true);
						setMageDisabled(true);
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("fighter"))
						);
					}}
					disabled={fighterDisabled}
				>
					Fighter
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setMarksmenDisabled(true);
						setDefenderDisabled(true);
						setFighterDisabled(true);
						setMageDisabled(true);
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("healer"))
						);
					}}
					disabled={healerDisabled}
				>
					Healer
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setMarksmenDisabled(true);
						setDefenderDisabled(true);
						setFighterDisabled(true);
						setHealerDisabled(true);
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("mage"))
						);
					}}
					disabled={mageDisabled}
				>
					Mage
				</Button>
			</div>

			<div className='filters'>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(data);
						setLeggoDisabled(false);
						setMythicDisabled(false);
						setMarksmenDisabled(false);
						setDefenderDisabled(false);
						setFighterDisabled(false);
						setHealerDisabled(false);
						setMageDisabled(false);
					}}
				>
					Clear
				</Button>
			</div>

			<table className='background'>
				<thead></thead>
				<tbody>
					<tr style={{borderBottom:"1px solid black"}}>
						<td style={{borderRight:"1px solid black"}}>
							<img className="tierImages" src={require(`../assets/images/SSS.webp`)} alt='' />
						</td>
						<td className="tier">{load("SSS")}</td>
					</tr>
					<tr style={{borderBottom:"1px solid black"}}>
						<td style={{borderRight:"1px solid black"}}>
							<img src={require(`../assets/images/S.webp`)} alt='' />
						</td>
						<td className="tier">{load("S")}</td>
					</tr>
					<tr style={{borderBottom:"1px solid black"}}>
						<td style={{borderRight:"1px solid black"}}>
							<img src={require(`../assets/images/A.webp`)} alt='' />
						</td>
						<td className="tier">{load("A")}</td>
					</tr>
					<tr style={{borderBottom:"1px solid black"}}>
						<td style={{borderRight:"1px solid black"}}>
							<img src={require(`../assets/images/B.webp`)} alt='' />
						</td>
						<td className="tier">{load("B")}</td>
					</tr>
					<tr style={{borderBottom:"1px solid black"}}>
						<td style={{borderRight:"1px solid black"}}>
							<img src={require(`../assets/images/C.webp`)} alt='' />
						</td>
						<td className="tier">{load("C")}</td>
					</tr>
					<tr style={{borderBottom:"1px solid black"}}>
						<td style={{borderRight:"1px solid black"}}>
							<img src={require(`../assets/images/D.webp`)} alt='' />
						</td>
						<td className="tier">{load("D")}</td>
					</tr>
					<tr style={{borderBottom:"1px solid black"}}>
						<td style={{borderRight:"1px solid black"}}>
							<img src={require(`../assets/images/F.webp`)} alt='' />
						</td>
						<td className="tier">{load("F")}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
