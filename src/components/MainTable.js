import { useState } from "react";
import ArtifactCard from "./ArtifactCard.js";
import { Button } from "react-bootstrap";

//data
import { data } from "../assets/artifacts/data.js";

export default function MainTable() {
	const [dataToDisplay, setDataToDisplay] = useState(data);

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
					/>
				);
			});
	}

	return (
		<div className='content'>
			<div className='filters'>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("mythic"))
						);
					}}
				>
					Mythic
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("legendary"))
						);
					}}
				>
					Legendary
				</Button>
			</div>
			<div className='filters'>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("marksmen"))
						);
					}}
				>
					Marksmen
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("defender"))
						);
					}}
				>
					Defender
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("fighter"))
						);
					}}
				>
					Fighter
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("healer"))
						);
					}}
				>
					Healer
				</Button>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(
							dataToDisplay.filter((a) => a.tags.includes("mage"))
						);
					}}
				>
					Mage
				</Button>
			</div>

			<div className='filters'>
				<Button
					variant='info'
					onClick={() => {
						setDataToDisplay(data);
					}}
				>
					Clear
				</Button>
			</div>

			<table className='table'>
				<thead></thead>
				<tbody>
					<tr>
						<td>
							<img src={require(`../assets/images/SS.webp`)} alt='ss' />
						</td>
						<td className='tier'>{load("SS")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/S.webp`)} alt='s' />
						</td>
						<td className='tier'>{load("S")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/A.webp`)} alt='a' />
						</td>
						<td className='tier'>{load("A")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/B.webp`)} alt='b' />
						</td>
						<td className='tier'>{load("B")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/C.webp`)} alt='c' />
						</td>
						<td className='tier'>{load("C")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/D.webp`)} alt='d' />
						</td>
						<td className='tier'>{load("D")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/F.webp`)} alt='f' />
						</td>
						<td className='tier'>{load("F")}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
