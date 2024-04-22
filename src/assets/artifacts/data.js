const data = [
	{
		name: "Bloodbound Signet",
		tags: ["marksmen", "mythic"],
		img: "Bloodbond Signet crop.webp",
		unrankedDescription:
			"Reduces Max HP by 30% and increases Crit. DMG by 20%.",
		maxRankDescription: "Reduces Max HP by 15% and increases Crit. DMG by 45%.",
		rankSort: 2,
		rank: "A",
		tooltipAnchor: "bloodboundAnchor",
		tooltipAnchorCall: "#bloodboundAnchor",
	},
	{
		name: "Broken Nightmare",
		tags: ["marksmen", "legendary"],
		img: "Broken Nightmare crop.webp",
		unrankedDescription:
			"Each Basic ATK launched increases ATK by 3% for 2 sec, stacking up to 3 time(s).",
		maxRankDescription:
			"Each Basic ATK launched increases ATK by 8% for 2 sec, stacking up to 3 time(s).",
		rankSort: 1,
		rank: "A",
		tooltipAnchor: "BrokenNightmareAnchor",
		tooltipAnchorCall: "#BrokenNightmareAnchor",
	},
	{
		name: "Ichor Chalice",
		tags: ["marksmen", "mythic"],
		img: "Ichor Chalice crop.webp",
		unrankedDescription:
			"Increases DMG by 10%. When dealing DMG, restores 3% of the hero’s Max HP.",
		maxRankDescription:
			"Increases DMG by 15%. When dealing DMG, restores 5% of the hero’s Max HP.",
		rankSort: 2,
		rank: "B",
		tooltipAnchor: "IchorChaliceAnchor",
		tooltipAnchorCall: "#IchorChaliceAnchor",
	},
	{
		name: "Idril's Gaze",
		tags: ["marksmen", "legendary"],
		img: "Idril's Gaze crop.webp",
		unrankedDescription:
			"Dealing Crit. Dmg has a 15% chance to ignore 30% of the target’s DEF and M. RES for 3 sec.",
		maxRankDescription:
			"Dealing Crit. Dmg has a 25% chance to ignore 40% of the target’s DEF and M. RES for 3 sec.",
		rankSort: 2,
		rank: "S",
		tooltipAnchor: "IdrilsGazeAnchor",
		tooltipAnchorCall: "#IdrilsGazeAnchor",
	},
	{
		name: "Pin of Precision",
		tags: ["marksmen", "legendary"],
		img: "Pin of Precision crop.webp",
		unrankedDescription:
			"If the hero hasn’t received any DMG within the last 6 sec, their DMG will be increased by 10%.",
		maxRankDescription:
			"If the hero hasn’t received any DMG within the last 6 sec, their DMG will be increased by 20%.",
		rankSort: 3,
		rank: "C",
		tooltipAnchor: "PinofPrecisionAnchor",
		tooltipAnchorCall: "#PinofPrecisionAnchor",
	},
	{
		name: "Reaper's Emblem",
		tags: ["marksmen", "mythic"],
		img: "Reaper's Emblem crop.webp",
		unrankedDescription:
			"Increases DMG by 5%. After killing the target, increases an additional DMG of 5%, stacking up to 2 times. This effect lasts for 10 seconds.",
		maxRankDescription:
			"Increases DMG by 10%. After killing the target, increases an additional DMG of 10%, stacking up to 2 times. This effect lasts for 10 seconds.",
		rankSort: 3,
		rank: "A",
		tooltipAnchor: "ReapersEmblemAnchor",
		tooltipAnchorCall: "#ReapersEmblemAnchor",
	},
	{
		name: "Shadow Gaze",
		tags: ["marksmen", "legendary"],
		img: "Shadow Gaze crop.webp",
		unrankedDescription:
			"Increases ATK by 10% for every 5 attacks, lasting for 5 sec.",
		maxRankDescription:
			"Increases ATK by 20% for every 5 attacks, lasting for 5 sec.",
		rankSort: 1,
		rank: "B",
		tooltipAnchor: "ShadowGazeAnchor",
		tooltipAnchorCall: "#ShadowGazeAnchor",
	},
	{
		name: "Sharpshooter Crest",
		tags: ["marksmen", "mythic"],
		img: "Sharpshooter Crest crop.webp",
		unrankedDescription:
			"When there are no enemies within 1 tile, AoE DMG is increased by 20%.",
		maxRankDescription:
			"When there are no adjacent enemies, AoE DMG is increased by 30%.",
		rankSort: 3,
		rank: "S",
		tooltipAnchor: "SharpshooterCrestAnchor",
		tooltipAnchorCall: "#SharpshooterCrestAnchor",
	},
	{
		name: "Spirit Siphon",
		tags: ["marksmen", "mythic"],
		img: "Spirit Siphon crop.webp",
		unrankedDescription:
			"Increases DMG dealt to the same target by 5% with each consecutive hit, up to 3 times. However, the effect will disappear if the hero switches to a different target.",
		maxRankDescription:
			"Increases DMG dealt to the same target by 10% with each consecutive hit, up to 3 times. However, the effect will disappear if the hero switches to a different target.",
		rankSort: 1,
		rank: "S",
		tooltipAnchor: "SpiritSiphon",
		tooltipAnchorCall: "#SpiritSiphon",
	},
	{
		name: "Taunting Gaze",
		tags: ["marksmen", "legendary"],
		img: "Taunting Gaze crop.webp",
		unrankedDescription:
			"Increased distance means increased DMG. (Every 1 tile away from the target increases DMG dealt by 2%).",
		maxRankDescription:
			"Increased distance means increased DMG. (Every 1 tile away from the target increases DMG dealt by 4.5%).",
		rankSort: 2,
		rank: "C",
		tooltipAnchor: "TauntingGaze",
		tooltipAnchorCall: "#TauntingGaze",
	},
	{
		name: "The North's Judgement",
		tags: ["marksmen", "legendary"],
		img: "The North's Judgment crop.webp",
		unrankedDescription:
			"When shielded, increases ATK by 10%. When the shield disappears, the bonus will last for 6 more sec.",
		maxRankDescription:
			"When shielded, increases ATK by 15%. When the shield disappears, the bonus will last for 6 more sec.",
		rankSort: 1,
		rank: "D",
		tooltipAnchor: "TheNorthsJudgementAnchor",
		tooltipAnchorCall: "#TheNorthsJudgementAnchor",
	},
	{
		name: "The Watchguard's Disguise",
		tags: ["marksmen", "legendary"],
		img: "The Watchguard's Disguise crop.webp",
		unrankedDescription: "Increases DMG to airborne units by 10%.",
		maxRankDescription: "Increases DMG to airborne units by 15%.",
		rankSort: 1,
		rank: "C",
		tooltipAnchor: "TheWatchguardsDisguiseAnchor",
		tooltipAnchorCall: "#TheWatchguardsDisguiseAnchor",
	},
	{
		name: "Astral Obelisk",
		tags: ["defender", "mythic"],
		img: "Astral Obelisk crop.webp",
		unrankedDescription:
			"ATK increases by 5%. After receiving healing, increases Rage Regeneration by 25% for 5 sec.",
		maxRankDescription:
			"ATK increases by 5%. After receiving healing, increases Rage Regeneration by 50% for 5 sec.",
		rankSort: 1,
		rank: "S",
		tooltipAnchor: "AstralObeliskAnchor",
		tooltipAnchorCall: "#AstralObeliskAnchor",
	},
	{
		name: "Bastion Ring",
		tags: ["defender", "mythic"],
		img: "Bastion Ring crop.webp",
		unrankedDescription:
			"Increases Block by 1. Increases P. DMG Reduction and M. DMG Reduction by 4% for every blocked unit, stacking up to 4 times.",
		maxRankDescription:
			"Increases Block by 1. Increases P. DMG Reduction and M. DMG Reduction by 9% for every blocked unit, stacking up to 4 times.",
		rankSort: 1,
		rank: "SSS",
		tooltipAnchor: "BastionRingAnchor",
		tooltipAnchorCall: "#BastionRingAnchor",
	},
	{
		name: "Bloodlust Phylactery",
		tags: ["defender", "mythic"],
		img: "Bloodlust Phylactery crop.webp",
		unrankedDescription:
			"Increases DMG permanently by 1% when damage is taken. Stacks up to 15 time(s).",
		maxRankDescription:
			"Increases DMG permanently by 1% when damage is taken. Stacks up to 25 time(s).",
		rankSort: 1,
		rank: "C",
		tooltipAnchor: "BloodlustPhylacteryAnchor",
		tooltipAnchorCall: "#BloodlustPhylacteryAnchor",
	},
	{
		name: "Death Knell",
		tags: ["defender", "legendary"],
		img: "Death Knell crop.webp",
		unrankedDescription:
			"When the hero is deployed, increases DEF by 5%. When the hero’s HP drops to 40% or below, instantly restores 15% HP. This effect can be triggered up to 1 time(s) max per deployment.",
		maxRankDescription:
			"When the hero is deployed, increases DEF by 15%. When the hero’s HP drops to 40% or below, instantly restores 30% HP. This effect can be triggered up to 1 time(s) max per deployment.",
		rankSort: 2,
		rank: "D",
		tooltipAnchor: "DeathKnellAnchor",
		tooltipAnchorCall: "#DeathKnellAnchor",
	},
	{
		name: "Goddess' Grace",
		tags: ["defender", "mythic"],
		img: "Goddess' Grace crop.webp",
		unrankedDescription:
			"Increases DEF by 10%. Gains an extra 3% DEF bonus for every 10 sec on the battlefield. Stacks up to 3 time(s).",
		maxRankDescription:
			"Increases DEF by 15%. Gains an extra 5% DEF bonus for every 10 sec on the battlefield. Stacks up to 3 time(s).",
		rankSort: 2,
		rank: "B",
		tooltipAnchor: "GoddessGraceAnchor",
		tooltipAnchorCall: "#GoddessGraceAnchor",
	},
	{
		name: "Heart of Thorn",
		tags: ["defender", "legendary"],
		unrankedDescription:
			"When taking DMG, there is a 8% chance of dealing DMG equal to 10% Max HP to the attacker.",
		maxRankDescription:
			"When taking DMG, there is a 13% chance of dealing DMG equal to 20% Max HP to the attacker.",
		img: "Heart of Thorn crop.webp",
		rankSort: 3,
		rank: "D",
		tooltipAnchor: "HeartOfThornAnchor",
		tooltipAnchorCall: "#HeartOfThornAnchor",
	},
	{
		name: "Nightmare Serpent",
		tags: ["defender", "legendary"],
		img: "Nightmare Serpent crop.webp",
		unrankedDescription:
			"Taking DMG 5 time(s) restores HP equal to 3% Max HP. This effect can take effect only 1 time every 4 sec.",
		maxRankDescription:
			"Taking DMG 3 time(s) restores HP equal to 6% Max HP. This effect can take effect only 1 time every 4 sec.",
		rankSort: 1,
		rank: "B",
		tooltipAnchor: "NightmareSerpentAnchor",
		tooltipAnchorCall: "#NightmareSerpentAnchor",
	},
	{
		name: "Regal Crest",
		tags: ["defender", "mythic"],
		img: "Regal Crest crop.webp",
		unrankedDescription: "Received Healing +20%.",
		maxRankDescription: "Received Healing +40%.",
		rankSort: 3,
		rank: "C",
		tooltipAnchor: "RegalCrestAnchor",
		tooltipAnchorCall: "#RegalCrestAnchor",
	},
	{
		name: "Rex's Vow",
		tags: ["defender", "legendary"],
		img: "Rex's Vow crop.webp",
		unrankedDescription:
			"Reduces damage taken by 10% when protected by a shield.",
		maxRankDescription:
			"Reduces damage taken by 20% when protected by a shield.",
		rankSort: 2,
		rank: "A",
		tooltipAnchor: "RexsVowAnchor",
		tooltipAnchorCall: "#RexsVowAnchor",
	},
	{
		name: "Solar Embrace",
		tags: ["defender", "legendary"],
		img: "Solar Embrace crop.webp",
		unrankedDescription: "When taking DMG, DEF is increased by 12% for 3 sec.",
		maxRankDescription: "When taking DMG, DEF is increased by 22% for 3 sec.",
		rankSort: 1,
		rank: "D",
		tooltipAnchor: "SolarEmbraceAnchor",
		tooltipAnchorCall: "#SolarEmbraceAnchor",
	},
	{
		name: "Soulbane Rosary",
		tags: ["defender", "legendary"],
		img: "Soulbane Rosary crop.webp",
		unrankedDescription:
			"Reduces Max HP by 20%, increases ATK by 8%, and increases ATK Spd. By 30.",
		maxRankDescription:
			"Reduces Max HP by 5%, increases ATK by 10%, and increases ATK Spd. By 50.",
		rankSort: 2,
		rank: "C",
		tooltipAnchor: "SoulbaneRosaryAnchor",
		tooltipAnchorCall: "#SoulbaneRosaryAnchor",
	},
	{
		name: "The North's Will",
		tags: ["defender", "legendary"],
		img: "The North's Will crop.webp",
		unrankedDescription: "Whenever the hero loses shield, restores 10% HP.",
		maxRankDescription: "Whenever the hero loses shield, restores 15% HP.",
		rankSort: 2,
		rank: "S",
		tooltipAnchor: "TheNorthsWillAnchor",
		tooltipAnchorCall: "#TheNorthsWillAnchor",
	},
	{
		name: "The Watchguard's Unity",
		tags: ["defender", "legendary"],
		img: "The Watchguard's Unity crop.webp",
		unrankedDescription: "Max HP +10%",
		maxRankDescription: "Max HP +20%",
		rankSort: 3,
		rank: "A",
		tooltipAnchor: "TheWatchguardsUnityAnchor",
		tooltipAnchorCall: "#TheWatchguardsUnityAnchor",
	},
	{
		name: "Tuning Crystal",
		tags: ["defender", "mythic"],
		img: "Tuning Crystal crop.webp",
		unrankedDescription:
			"After every 10 Basic ATK landed, deals AoE P. DMG 1 time equal to 200% of DMG Multiplier to at most 5 targets and restores HP for 10% of DMG dealt.",
		maxRankDescription:
			"After every 10 Basic ATK landed, deals AoE P. DMG 1 time equal to 250% of DMG Multiplier to at most 5 targets and restores HP for 20% of DMG dealt.",
		rankSort: 1,
		rank: "A",
		tooltipAnchor: "TuningCrystalAnchor",
		tooltipAnchorCall: "#TuningCrystalAnchor",
	},
	{
		name: "Amulet of Arteries",
		tags: ["fighter", "mythic"],
		img: "Amulet of Arteries crop.webp",
		unrankedDescription:
			"For every 10 instance(s) of M. ATK inflicted, Selene’s Shadow Strike is summoned upon up to 3 enemies, dealing 80% DMG. The effect can be triggered as often as 1 time every 8 sec.",
		maxRankDescription:
			"For every 10 instance(s) of M. ATK inflicted, Selene’s Shadow Strike is summoned upon up to 3 enemies, dealing 130% DMG. The effect can be triggered as often as 1 time every 8 sec.",
		rankSort: 2,
		rank: "C",
		tooltipAnchor: "AmuletOfArteriesAnchor",
		tooltipAnchorCall: "#AmuletOfArteriesAnchor",
	},
	{
		name: "Crest of Thunder",
		tags: ["fighter", "legendary"],
		img: "Crest of Thunder crop.webp",
		unrankedDescription: "Increases AoE DMG by 10%",
		maxRankDescription: "Increases AoE DMG by 20%",
		rankSort: 3,
		rank: "C",
		tooltipAnchor: "CrestOfThunderAnchor",
		tooltipAnchorCall: "#CrestOfThunderAnchor",
	},
	{
		name: "Eye of Sin",
		tags: ["fighter", "mythic"],
		img: "Eye of Sin crop.webp",
		unrankedDescription:
			"Increases AoE DMG by 10%. Killing enemies grants an extra 5% AoE DMG bonus that lasts 3 sec.",
		maxRankDescription:
			"Increases AoE DMG by 20%. Killing enemies grants an extra 10% AoE DMG bonus that lasts 3 sec.",
		rankSort: 1,
		rank: "B",
		tooltipAnchor: "EyeOfSinAnchor",
		tooltipAnchorCall: "#EyeOfSinAnchor",
	},
	{
		name: "Flux Pendant",
		tags: ["fighter", "mythic"],
		img: "Flux Pendant crop.webp",
		unrankedDescription:
			"Increases Crit. DMG by 12%. When HP drops below 50%, the increase is doubled.",
		maxRankDescription:
			"Increases Crit. DMG by 30%. When HP drops below 50%, the increase is doubled.",
		rankSort: 1,
		rank: "A",
		tooltipAnchor: "FluxPendantAnchor",
		tooltipAnchorCall: "#FluxPendantAnchor",
	},
	{
		name: "Frigid Flame",
		tags: ["fighter", "mythic"],
		img: "Frigid Flame crop.webp",
		unrankedDescription:
			"Increases DMG by 6% every 4 sec when no DMG is taken. Stacks up to 3 times. Taking DMG each time removes 1 stack.",
		maxRankDescription:
			"Increases DMG by 11% every 4 sec when no DMG is taken. Stacks up to 3 times. Taking DMG each time removes 1 stack.",
		rankSort: 4,
		rank: "S",
		tooltipAnchor: "FrigidFlameAnchor",
		tooltipAnchorCall: "#FrigidFlameAnchor",
	},
	{
		name: "Lucky Legacy",
		tags: ["fighter", "legendary"],
		img: "Lucky Legacy crop.webp",
		unrankedDescription:
			"For each time the cost is restored, there is a 5% chance to double the amount.",
		maxRankDescription:
			"For each time the cost is restored, there is a 15% chance to double the amount.",
		rankSort: 2,
		rank: "B",
		tooltipAnchor: "LuckyLegacyAnchor",
		tooltipAnchorCall: "#LuckyLegacyAnchor",
	},
	{
		name: "Lunacy Visor",
		tags: ["fighter", "mythic"],
		img: "Lunacy Visor crop.webp",
		unrankedDescription:
			"Increases Block by 1. Additionally, the wearer restores HP equal to 0.7% of Max HP each time they deal DMG to 1 target, stacking up to 3 targets.",
		maxRankDescription:
			"Increases Block by 1. Additionally, the wearer restores HP equal to 1.2% of Max HP each time they deal DMG to 1 target, stacking up to 3 targets.",
		rankSort: 2,
		rank: "S",
		tooltipAnchor: "LunacyVisorAnchor",
		tooltipAnchorCall: "#LunacyVisorAnchor",
	},
	{
		name: "Nightmare Shadow",
		tags: ["fighter", "legendary"],
		img: "Nightmare Shadow crop.webp",
		unrankedDescription:
			"Increases Crit. Rate by 5% for every 5 attack(s). Can stack up to 3.",
		maxRankDescription:
			"Increases Crit. Rate by 10% for every 5 attack(s). Can stack up to 3.",
		rankSort: 1,
		rank: "C",
		tooltipAnchor: "NightmareShadowAnchor",
		tooltipAnchorCall: "#NightmareShadowAnchor",
	},
	{
		name: "Prey Slayer",
		tags: ["fighter", "legendary"],
		img: "Prey Slayer crop.webp",
		unrankedDescription: "Deals 10% extra DMG to target inflicted with Bleed.",
		maxRankDescription: "Deals 20% extra DMG to target inflicted with Bleed.",
		rankSort: 2,
		rank: "D",
		tooltipAnchor: "PreySlayerAnchor",
		tooltipAnchorCall: "#PreySlayerAnchor",
	},
	{
		name: "Scarlet Hunt",
		tags: ["fighter", "mythic"],
		img: "Scarlet Hunt crop.webp",
		unrankedDescription: "Deals 20% extra DMG to targets inflicted with Bleed.",
		maxRankDescription: "Deals 30% extra DMG to targets inflicted with Bleed.",
		rankSort: 3,
		rank: "S",
		tooltipAnchor: "ScarletHuntAnchor",
		tooltipAnchorCall: "#ScarletHuntAnchor",
	},
	{
		name: "Rage Chain",
		tags: ["fighter", "legendary"],
		img: "Rage Chain crop.webp",
		unrankedDescription:
			"Increases Crit. DMG by 0.3% for every 1% reduction in HP.",
		maxRankDescription:
			"Increases Crit. DMG by 0.6% for every 1% reduction in HP.",
		rankSort: 1,
		rank: "D",
		tooltipAnchor: "RageChainAnchor",
		tooltipAnchorCall: "#RageChainAnchor",
	},
	{
		name: "Realm Tear",
		tags: ["fighter", "mythic"],
		img: "Realm Tear crop.webp",
		unrankedDescription:
			"Deals increased DMG to enemies beyond 1 tile from the hero. For every 1 tile beyond the first, DMG is increased by 3%.",
		maxRankDescription:
			"Deals increased DMG to enemies beyond 1 tile from the hero. For every 1 tile beyond the first, DMG is increased by 8%.",
		rankSort: 1,
		rank: "S",
		tooltipAnchor: "RealmTearAnchor",
		tooltipAnchorCall: "#RealmTearAnchor",
	},
	{
		name: "Slayer's Malice",
		tags: ["fighter", "legendary"],
		img: "Slayer's Malice crop.webp",
		unrankedDescription: "When HP is above 80%, increases DMG by 10%.",
		maxRankDescription: "When HP is above 80%, increases DMG by 20%.",
		rankSort: 3,
		rank: "B",
		tooltipAnchor: "SlayersMaliceAnchor",
		tooltipAnchorCall: "#SlayersMaliceAnchor",
	},
	{
		name: "The North's Horn",
		tags: ["fighter", "legendary"],
		img: "The North's Horn crop.webp",
		unrankedDescription:
			"When shielded, increases Crit. Rate by 10%. When the shield disappears, the Crit. Rate bonus will last for 6 more sec.",
		maxRankDescription:
			"When shielded, increases Crit. Rate by 15%. When the shield disappears, the Crit. Rate bonus will last for 6 more sec.",
		rankSort: 3,
		rank: "D",
		tooltipAnchor: "TheNorthsHornAnchor",
		tooltipAnchorCall: "#TheNorthsHornAnchor",
	},
	{
		name: "Voroth's Wrath",
		tags: ["fighter", "legendary"],
		img: "Voroth's Wrath crop.webp",
		unrankedDescription:
			"Increases Crit. Rate by 0.3% for every 1% reduction in HP.",
		maxRankDescription:
			"Increases Crit. Rate by 0.8% for every 1% reduction in HP.",
		rankSort: 3,
		rank: "C",
		tooltipAnchor: "VorothsWrathAnchor",
		tooltipAnchorCall: "#VorothsWrathAnchor",
	},
	{
		name: "Wailing Skull",
		tags: ["fighter", "mythic"],
		img: "Wailing Skull crop.webp",
		unrankedDescription:
			"Dealing DMG has a 40% chance of summoning 1 Shadow Guard with 80% of the hero’s attributes to attack enemies for 10 sec. The effect can be triggered as often as 1 time(s) every 20 sec.",
		maxRankDescription:
			"Dealing DMG has a 40% chance of summoning 1 Shadow Guard with 150% of the hero’s attributes to attack enemies for 10 sec. The effect can be triggered as often as 1 time(s) every 20 sec.",
		rankSort: 1,
		rank: "SSS",
		tooltipAnchor: "WailingSkullAnchor",
		tooltipAnchorCall: "#WailingSkullAnchor",
	},
	{
		name: "Watchguard's Ambition",
		tags: ["fighter", "legendary"],
		img: "Watchguard's Ambition crop.webp",
		unrankedDescription:
			"Each Basic ATK launched has a(n) 10% chance of triggering another Basic ATK.",
		maxRankDescription:
			"Each Basic ATK launched has a(n) 15% chance of triggering another Basic ATK.",
		rankSort: 2,
		rank: "A",
		tooltipAnchor: "WatchguardsAmbitionAnchor",
		tooltipAnchorCall: "#WatchguardsAmbitionAnchor",
	},
	{
		name: "Brightroot Ring",
		tags: ["healer", "mythic"],
		img: "Brightroot Ring crop.webp",
		unrankedDescription:
			"When HP is at maximum, increases Healing Effect by 30.",
		maxRankDescription:
			"When HP is at maximum, increases Healing Effect by 40.",
		rankSort: 3,
		rank: "A",
		tooltipAnchor: "BrightrootRingAnchor",
		tooltipAnchorCall: "#BrightrootRingAnchor",
	},
	{
		name: "Chalice of Youth",
		tags: ["healer", "legendary"],
		img: "Chalice of Youth crop.webp",
		unrankedDescription:
			"Increases Healing Multiplier by 18% when healing a hero with less than 30% HP.",
		maxRankDescription:
			"Increases Healing Multiplier by 30% when healing a hero with less than 40% HP.",
		rankSort: 1,
		rank: "D",
		tooltipAnchor: "ChaliceOfYouthAnchor",
		tooltipAnchorCall: "#ChaliceOfYouthAnchor",
	},
	{
		name: "Elysian Epitaph",
		tags: ["healer", "mythic"],
		img: "Elysian Epitaph crop.webp",
		unrankedDescription:
			"Increases Healing Effect (ST) by 3% for every 1 ally unit(s) present in range, stacking up to 4 time(s).",
		maxRankDescription:
			"Increases Healing Effect (ST) by 8% for every 1 ally unit(s) present in range, stacking up to 4 time(s).",
		rankSort: 2,
		rank: "A",
		tooltipAnchor: "ElysianEpitaphAnchor",
		tooltipAnchorCall: "#ElysianEpitaphAnchor",
	},
	{
		name: "Euphoric Orb",
		tags: ["healer", "mythic"],
		img: "Euphoric Orb crop.webp",
		unrankedDescription:
			"Increases the ATK Spd. Of all heroes in range by 30 every 60 sec, lasting for 10 sec.",
		maxRankDescription:
			"Increases the ATK Spd. Of all heroes in range by 30 every 60 sec, lasting for 40 sec.",
		rankSort: 2,
		rank: "S",
		tooltipAnchor: "EuphoricOrbAnchor",
		tooltipAnchorCall: "#EuphoricOrbAnchor",
	},
	{
		name: "Golden Scarab",
		tags: ["healer", "mythic"],
		img: "Golden Scarab crop.webp",
		unrankedDescription: "ATK increases by 5%. Rage Regen increases by 25%.",
		maxRankDescription: "ATK increases by 5%. Rage Regen increases by 50%.",
		rankSort: 1,
		rank: "S",
		tooltipAnchor: "GoldenScarabAnchor",
		tooltipAnchorCall: "#GoldenScarabAnchor",
	},
	{
		name: "Nephrite Folio",
		tags: ["healer", "legendary"],
		img: "Nephrite Folio crop.webp",
		unrankedDescription:
			"When HP is at maximum, increases Healing Effect by 15.",
		maxRankDescription:
			"When HP is at maximum, increases Healing Effect by 20.",
		rankSort: 2,
		rank: "D",
		tooltipAnchor: "NephriteFolioAnchor",
		tooltipAnchorCall: "#NephriteFolioAnchor",
	},
	{
		name: "Nyniv's Mercy",
		tags: ["healer", "legendary"],
		img: "Nyniv's Mercy crop.webp",
		unrankedDescription:
			"When entering the field, increases Healing Effect by 10.",
		maxRankDescription:
			"When entering the field, increases Healing Effect by 15.",
		rankSort: 2,
		rank: "C",
		tooltipAnchor: "NynivsMercyAnchor",
		tooltipAnchorCall: "#NynivsMercyAnchor",
	},
	{
		name: "Oneiric Band",
		tags: ["healer", "legendary"],
		img: "Oneiric Band crop.webp",
		unrankedDescription:
			"When the Ultimate is triggered, increases ATK by 8% and ATK Spd. by 40 for 10 sec.",
		maxRankDescription:
			"When the Ultimate is triggered, increases ATK by 10% and ATK Spd. by 60 for 15 sec.",
		rankSort: 2,
		rank: "B",
		tooltipAnchor: "OneiricBandAnchor",
		tooltipAnchorCall: "#OneiricBandAnchor",
	},
	{
		name: "Radiant Lantern",
		tags: ["healer", "legendary"],
		img: "Radiant Lantern crop.webp",
		unrankedDescription:
			"Increases AoE Healing Effect by 3 for every 1 allied unit(s) in range, stacking up to 4 time(s).",
		maxRankDescription:
			"Increases AoE Healing Effect by 8 for every 1 allied unit(s) in range, stacking up to 4 time(s).",
		rankSort: 1,
		rank: "C",
		tooltipAnchor: "RadiantLanternAnchor",
		tooltipAnchorCall: "#RadiantLanternAnchor",
	},
	{
		name: "Sacred Amber",
		tags: ["healer", "legendary"],
		img: "Sacred Amber crop.webp",
		unrankedDescription:
			"Increases Healing Effect by 20. Additionally, for each ally in range, reduces Healing Effect by 5.",
		maxRankDescription:
			"Increases Healing Effect by 40. Additionally, for each ally in range, reduces Healing Effect by 10.",
		rankSort: 3,
		rank: "D",
		tooltipAnchor: "SacredAmberAnchor",
		tooltipAnchorCall: "#SacredAmberAnchor",
	},
	{
		name: "The North's Glory",
		tags: ["healer", "legendary"],
		img: "The North's Glory crop.webp",
		unrankedDescription:
			"Healing a unit to full HP has a 20% chance of granting them a shield equal to 20% of its Max HP for 10 sec. The effect can only be triggered 1 time every 5 seconds.",
		maxRankDescription:
			"Healing a unit to full HP has a 40% chance of granting them a shield equal to 30% of its Max HP for 10 sec. The effect can only be triggered 1 time every 5 seconds.",
		rankSort: 1,
		rank: "B",
		tooltipAnchor: "TheNorthsGloryAnchor",
		tooltipAnchorCall: "#TheNorthsGloryAnchor",
	},
	{
		name: "The Watchguard's Fortune",
		tags: ["healer", "legendary"],
		img: "The Watchguard's Fortune crop.webp",
		unrankedDescription:
			"Each Basic ATK launched has a chance equal to 10% of Crit. Rate to trigger 1 additional heal.",
		maxRankDescription:
			"Each Basic ATK launched has a chance equal to 20% of Crit. Rate to trigger 1 additional heal.",
		rankSort: 1,
		rank: "F",
		tooltipAnchor: "TheWatchguardsFortuneAnchor",
		tooltipAnchorCall: "#TheWatchguardsFortuneAnchor",
	},
	{
		name: "Tumultuous Horn",
		tags: ["healer", "legendary"],
		img: "Tumultuous Horn crop.webp",
		unrankedDescription: "Increases Initial Rage by 25% when deployed.",
		maxRankDescription: "Increases Initial Rage by 50% when deployed.",
		rankSort: 3,
		rank: "S",
		tooltipAnchor: "TumultuousHornAnchor",
		tooltipAnchorCall: "#TumultuousHornAnchor",
	},
	{
		name: "Tya's Balm",
		tags: ["healer", "mythic"],
		img: "Tya's Balm crop.webp",
		unrankedDescription:
			"Increases Healing Multiplier by 30% when healing a hero with less than 30% HP.",
		maxRankDescription:
			"Increases Healing Multiplier by 50% when healing a hero with less than 40% HP.",
		rankSort: 1,
		rank: "A",
		tooltipAnchor: "TyasBalmAnchor",
		tooltipAnchorCall: "#TyasBalmAnchor",
	},
	{
		name: "Eonian Time",
		tags: ["mage", "legendary"],
		img: "Eonian Time crop.webp",
		unrankedDescription:
			"Dealing AoE DMG increases the hero’s AoE DMG by 2%. This effect can stack up to 5 time(s) and last for 3 sec.",
		maxRankDescription:
			"Dealing AoE DMG increases the hero’s AoE DMG by 2%. This effect can stack up to 10 time(s) and last for 3 sec.",
		rankSort: 3,
		rank: "C",
		tooltipAnchor: "EonianTimeAnchor",
		tooltipAnchorCall: "#EonianTimeAnchor",
	},
	{
		name: "Heaven's Rage",
		tags: ["mage", "mythic"],
		img: "Heaven's Rage crop.webp",
		unrankedDescription: "A Crit. Hit increases Crit. DMG by 25% for 3 sec.",
		maxRankDescription: "A Crit. Hit increases Crit. DMG by 45% for 3 sec.",
		rankSort: 2,
		rank: "B",
		tooltipAnchor: "HeavensRageAnchor",
		tooltipAnchorCall: "#HeavensRageAnchor",
	},
	{
		name: "Nightmare Samsara",
		tags: ["mage", "legendary"],
		img: "Nightmare Samsara crop.webp",
		unrankedDescription: "Restores 5% Rage for every 5 attacks.",
		maxRankDescription: "Restores 7.5% Rage for every 5 attacks.",
		rankSort: 1,
		rank: "S",
		tooltipAnchor: "NightmareSamsaraAnchor",
		tooltipAnchorCall: "#NightmareSamsaraAnchor",
	},
	{
		name: "Soul Binding Crystal",
		tags: ["mage", "legendary"],
		img: "Soul Binding Crystal crop.webp",
		unrankedDescription:
			"Restores 3% Rage when killing the target. Cooldown: 5 sec.",
		maxRankDescription:
			"Restores 5% Rage when killing the target. Cooldown: 5 sec.",
		rankSort: 1,
		rank: "D",
		tooltipAnchor: "SoulBindingCrystalAnchor",
		tooltipAnchorCall: "#SoulBindingCrystalAnchor",
	},
	{
		name: "Spellcaster's Echo",
		tags: ["mage", "legendary"],
		img: "Spellcaster's Echo crop.webp",
		unrankedDescription: "Recovers 10% Rage after using a skill.",
		maxRankDescription: "Recovers 15% Rage after using a skill.",
		rankSort: 4,
		rank: "B",
		tooltipAnchor: "SpellcastersEchoAnchor",
		tooltipAnchorCall: "#SpellcastersEchoAnchor",
	},
	{
		name: "Tear of Twilight",
		tags: ["mage", "mythic"],
		img: "Tear of Twilight crop.webp",
		unrankedDescription:
			"ATK is increased by 20% when deployed. When HP is lower than 80%, the ATK increase effect is reduced to 10%.",
		maxRankDescription:
			"ATK is increased by 30% when deployed. When HP is lower than 80%, the ATK increase effect is reduced to 15%.",
		rankSort: 1,
		rank: "SSS",
		tooltipAnchor: "TearOfTwilightAnchor",
		tooltipAnchorCall: "#TearOfTwilightAnchor",
	},
	{
		name: "The North's Storm",
		tags: ["mage", "legendary"],
		img: "The North's Storm crop.webp",
		unrankedDescription: "When shielded, increases ATK by 10%.",
		maxRankDescription: "When shielded, increases ATK by 15%.",
		rankSort: 2,
		rank: "D",
		tooltipAnchor: "TheNorthsStormAnchor",
		tooltipAnchorCall: "#TheNorthsStormAnchor",
	},
	{
		name: "The Watchguard's Wisdom",
		tags: ["mage", "legendary"],
		img: "The Watchguard's Wisdom crop.webp",
		unrankedDescription:
			"Increases the chance of triggering an additional Basic ATK by 0.2% for every 1% increase in Rage. This effect can be triggered up to 1 time every 5 sec.",
		maxRankDescription:
			"Increases the chance of triggering an additional Basic ATK by 0.5% for every 1% increase in Rage. This effect can be triggered up to 1 time every 5 sec.",
		rankSort: 2,
		rank: "C",
		tooltipAnchor: "TheWatchguardsWisdomAnchor",
		tooltipAnchorCall: "#TheWatchguardsWisdomAnchor",
	},
	{
		name: "Tidal Ring",
		tags: ["mage", "mythic"],
		img: "Tidal Ring crop.webp",
		unrankedDescription:
			"Increases DMG by 10%. Dealing DMG has a 25% chance of slowing down the target by 50% for 2 sec. This effect can be triggered up to 1 time every 4 sec.",
		maxRankDescription:
			"Increases DMG by 15%. Dealing DMG has a 50% chance of slowing down the target by 50% for 2 sec. This effect can be triggered up to 1 time every 4 sec.",
		rankSort: 1,
		rank: "C",
		tooltipAnchor: "TidalRingAnchor",
		tooltipAnchorCall: "#TidalRingAnchor",
	},
	{
		name: "Tome of Horror",
		tags: ["mage", "mythic"],
		img: "Tome of Horror crop.webp",
		unrankedDescription:
			"Attacking slowed targets increases ATK Spd. by 30 and Rage Regen by 25% for 5 sec. This effect can only be triggered 1 time every 8 sec.",
		maxRankDescription:
			"Attacking slowed targets increases ATK Spd. by 30 and Rage Regen by 50% for 5 sec. This effect can only be triggered 1 time every 8 sec.",
		rankSort: 3,
		rank: "B",
		tooltipAnchor: "TomeOfHorrorAnchor",
		tooltipAnchorCall: "#TomeOfHorrorAnchor",
	},
	{
		name: "Unfortunate Skull",
		tags: ["mage", "mythic"],
		img: "Unfortunate Skull crop.webp",
		unrankedDescription:
			"DMG received is increased by 20% while AoE DMG is increased by 25%.",
		maxRankDescription:
			"DMG received is increased by 10% while AoE DMG is increased by 35%.",
		rankSort: 1,
		rank: "B",
		tooltipAnchor: "UnfortunateSkullAnchor",
		tooltipAnchorCall: "#UnfortunateSkullAnchor",
	},
	{
		name: "White Tower Trinket",
		tags: ["mage", "legendary"],
		img: "White Tower Trinket crop.webp",
		unrankedDescription:
			"When deployed, increases ATK by 12%. When there are no adjacent allies, gains an extra ATK Spd. Increase of 20.",
		maxRankDescription: "When deployed, increases ATK by 18%. When there are no adjacent allies, gains an extra ATK Spd. Increase of 35.",
		rankSort: 1,
		rank: "A",
		tooltipAnchor: "WhiteTowerTrinketAnchor",
		tooltipAnchorCall: "#WhiteTowerTrinketAnchor",
	},
];

export { data };
