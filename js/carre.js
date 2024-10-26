/**
 * 1. Calculer le périmètre d'un carré
 * 4 côtés, égaux
 * Périmètre
 * Surface
 * fontcion pour calculer le périmètre
 */

/**
 * 2. Calculer la surface d'un carré
 * 4 côtés, égaux
 * Périmètre
 * Surface
 * fontcion pour calculer la surface
 */

const carre = {
	cote: 6,
	perimetre: 0,
	surface: 0,
	definirLeCote: function (nouvelleValeur) {
		this.cote = nouvelleValeur;
	},
	calculerSurface: function () {
		this.surface = this.cote * this.cote;
		return this.surface;
	},
	calculerPerimetre: function () {},
};
carre.definirLeCote(9);
const surfaceCarreSansValeur = carre.calculerSurface();
console.log({ surfaceCarreSansValeur });
