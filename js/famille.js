/**
 * 1. Lister tous les membres de la famille
 * 2. Afficher le nom complet
 * 3. Une petite présentation avec l'âge
 * 4. Dire si il est marié ou célibataire
 * 5. Dire si il est adulte ou pas
 * 6. Si il a des enfants et le nombre.
 */

/**
 * Que un membre peut être caracterisé par le type de famille (restreinte, ou élargie)
 */

/**
 * Pour la famille restreinte, les membres sont
 * Papa, maman, frères et soeurs
 */

/**
 * Pour la famille élargie, les membres sont
 * Grand-père, Grand-mère, Tantes et Oncles, Cousins, neveux et nièces
 */

const famille = [];

const creerInstanceMembreFamille = () => {
	return {
		nom: "",
		prenom: "",
		postNom: "",
		age: 0,
		etatCivile: "",
		nombreDEnfants: 0,
		typeDeRelation: "",
		biographie: "",
		remplirNom: function (nom, prenom, postNom) {
			if (nom && prenom && postNom) {
				this.nom = nom;
				this.prenom = prenom;
				this.postNom = postNom;
			} else {
				alert("Veuillez remplir le nom, postnom et le prénom");
			}
		},
		definirAge: function (age) {
			if (parseInt(age) >= 0) {
				this.age = age;
			} else {
				alert("Veuillez remplir l'âge, et votre âge doit être un nombre");
			}
		},
		definirEtatCivil: function (etatCivile) {
			if (etatCivile) {
				this.etatCivile = etatCivile;
			} else {
				alert("Veuillez remplir l'état civile");
			}
		},
		definirNombreDenfants: function (nombreDEnfants) {
			if (parseInt(nombreDEnfants) >= 0) {
				this.nombreDEnfants = nombreDEnfants;
			} else {
				alert(
					"Veuillez remplir le nombre d'enfants, et votre nombre doit être un nombre"
				);
			}
		},
		definirTypeDeRelation: function (typeDeRelation) {
			if (typeDeRelation) {
				this.typeDeRelation = typeDeRelation;
			} else {
				alert("Veuillez remplir le type de relation");
			}
		},
		definirBiographie: function (biographie) {
			if (biographie) {
				this.biographie = biographie;
			} else {
				alert("Veuillez remplir la biographie");
			}
		},
		afficherNoms: function () {
			const nameParagraphe = `${this.prenom} ${this.nom} ${this.postNom}`;
			return nameParagraphe;
		},
	};
};

const Justin = creerInstanceMembreFamille();
const Justine = creerInstanceMembreFamille();
Justin.remplirNom("KIDJIMARA", "Justin", "NDANGANI");
Justine.remplirNom("KIDJIMARA", "Justine", "KUDIATU");
famille.push(Justin, Justine);
const body = document.querySelector("body");
const membres = document.createElement("ul");

famille.map((membre) => {
	const itemMembre = document.createElement("li");
	itemMembre.innerText = membre.afficherNoms();
	membres.appendChild(itemMembre);
});

body.appendChild(membres);
