import { useEffect, useState } from "react";
import ArtifactCard from "./ArtifactCard.js";

//data
import { data } from "../assets/artifacts/data.js";

export default function MainTable() {
	const [ss, setSs] = useState(
		data.filter((artifact) => artifact.rank === "SS")
	);
	const [s, setS] = useState(data.filter((artifact) => artifact.rank === "S"));
	const [a, setA] = useState(data.filter((artifact) => artifact.rank === "A"));
	const [b, setB] = useState(data.filter((artifact) => artifact.rank === "B"));
	const [c, setC] = useState(data.filter((artifact) => artifact.rank === "C"));
	const [d, setD] = useState(data.filter((artifact) => artifact.rank === "D"));
	const [f, setF] = useState(data.filter((artifact) => artifact.rank === "F"));

	// useEffect(() => {
	// 	// setSs(data.filter((artifact) => artifact.rank === "SS"));
	// 	// setS(data.filter((artifact) => artifact.rank === "S"));
	// 	// setA(data.filter((artifact) => artifact.rank === "A"));
	// 	// setB(data.filter((artifact) => artifact.rank === "B"));
	// 	// setC(data.filter((artifact) => artifact.rank === "C"));
	// 	// setD(data.filter((artifact) => artifact.rank === "D"));
	// 	// setF(data.filter((artifact) => artifact.rank === "F"));
	// }, []);

	function load(tier) {
		let rankTier;
		switch (tier) {
			case "ss":
				rankTier = ss;
				break;
			case "s":
				rankTier = s;
				break;
			case "a":
				rankTier = a;
				break;
			case "b":
				rankTier = b;
				break;
			case "c":
				rankTier = c;
				break;
			case "d":
				rankTier = d;
				break;
			case "f":
				rankTier = f;
				break;
			default:
				break;
		}

		let sortedTier = rankTier.sort(function (a, b) {
			return a.rankSort[1] - b.rankSort[1];
		});

		return sortedTier.map((artifact) => {
			return (
				<ArtifactCard
					key={artifact.rankSort}
					name={artifact.name}
					img={artifact.img}
				/>
			);
		});
	}

	function filter(e) {
		console.log(e.target.id);
	}

	return (
		<div className='content'>
			{/* <h1>{data.length}</h1>
			<div class='filters'>
				<div className='filterInput'>
					<p>Marksmen</p>
					<input id='marksmen' onChange={filter} type='checkbox' />
				</div>
				<div className='filterInput'>
					<p>Defender</p>
					<input id='defender' onChange={filter} type='checkbox' />
				</div>
				<div className='filterInput'>
					<p>Healer</p>
					<input id='healer' onChange={filter} type='checkbox' />
				</div>
				<div className='filterInput'>
					<p>Mage</p>
					<input id='mage' onChange={filter} type='checkbox' />
				</div>
				<div className='filterInput'>
					<p>Fighter</p>
					<input id='fighter' onChange={filter} type='checkbox' />
				</div>
				<div className='filterInput'>
					<p>Legendary</p>
					<input id='legendary' onChange={filter} type='checkbox' />
				</div>
				<div className='filterInput'>
					<p>Mythic</p>
					<input id='mythic' onChange={filter} type='checkbox' />
				</div>
			</div> */}

			<table className='table'>
				<thead></thead>
				<tbody>
					<tr>
						<td>
							<img src={require(`../assets/images/SS.png`)} alt='ss' />
						</td>
						<td className='tier'>{load("ss")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/S.png`)} alt='s' />
						</td>
						<td className='tier'>{load("s")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/A.png`)} alt='a' />
						</td>
						<td className='tier'>{load("a")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/B.png`)} alt='b' />
						</td>
						<td className='tier'>{load("b")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/C.png`)} alt='c' />
						</td>
						<td className='tier'>{load("c")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/D.png`)} alt='d' />
						</td>
						<td className='tier'>{load("d")}</td>
					</tr>
					<tr>
						<td>
							<img src={require(`../assets/images/F.png`)} alt='f' />
						</td>
						<td className='tier'>{load("f")}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
