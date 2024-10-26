const apprenant1 = {
	prenom: "Serge",
	nom: "MATONDO",
	formation: "Développeur web",
	id: "dkkjsjkdsjjdks",
	afficherNomsApprenant: function () {
		return `${this.nom} ${this.prenom}`;
	},
	afficherLeCreneau: function () {
		const nomsApprenant = this.afficherNomsApprenant();
		switch (this.classe) {
			case "C2":
				console.log(
					`${nomsApprenant} suit le cours le Lundi et le Jeudi de 17h30 à 21h30`
				);
				break;
			case "A4":
				console.log(
					`${nomsApprenant} suit le cours le Mardi et le Vendredi de 17h30 à 21h30`
				);
				break;
			default:
				console.log(`${nomsApprenant} n'a pas été attribuer à une classe`);
				break;
		}
	},
};

apprenant1.afficherLeCreneau();

const apprenant2 = {
	prenom: "Victor",
	nom: "KADIATA",
	classe: "A4",
	formation: "Développeur web",
	id: "dkkjsjkdsjjdks",
	afficherNomsApprenant: function () {
		console.log(`${this.nom} ${this.prenom}`);
	},
};
