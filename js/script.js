const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];


/* 
<div class="single-icon">
	<i class="fas fa-cat"></i>
	<div class="name">Cat</div>
</div> 
*/

// Milestone 1
// Partendo dalla seguente struttura dati, 
// mostriamo in pagina tutte le icone disponibili come da layout.
const iconsColored = getIconsColored(icons, colors);

const containerIcons = $('#container-icons');
printIcons(icons, containerIcons); 

// Milestone 2
// Coloriamo le icone per tipo


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


/* ------------ FUNCTIONS ------------ */

// Questa funzione stampa le icone in pagina a partire da un array di oggetti
//
// objectArray --> l'array di oggetti che rappresenta le icone 
// container --> l'elemento html sul quale voglio stampare le icone
//
// return: void (undefined)
function printIcons(objectArray, container) {
	
	// Devo scorrere l'array con un ciclo foEach e ricavare le informazioni per creare
	// il template literal
	objectArray.forEach( (element) => {
		const iconPrefix = element.prefix;
		const iconName = element.name;
		const iconFamily = element.family;

		// Creo template literal
		const templateIcon = `
			<div class="single-icon">
				<i class="${iconFamily} ${iconPrefix}${iconName}"></i>
				<div class="name">${iconName}</div>
			</div> 
		`;

		// Devo stampare il template literal in pagina
		container.append(templateIcon);
	});	
}


// Questa funzione crea un nuovo array aggiungendo all'array precedente la proprietà color
// che cambia in funzione della proprietà type dell'array precedente.
//
// arrayIcons --> l'array di oggetti che rappresenta le icone
// arrayColors --> Array di stringhe che rappresentano i colori css
//
// Return: Array di oggetti
function getIconsColored(arrayIcons, arrayColors) {
	// Ho bisogno di una array contenente stringhe dei tipi di icone, non ripetute.
	const arrayIconsType = getIconsType(arrayIcons);
}

// Questa funzione ricava i tipi di icone da un array di oggetti e li mette in un array di stringhe, non ripetuti.
//
// arrayIcons --> l'array di oggetti che rappresenta le icone
//
// return: array di stringhe
function getIconsType(arrayIcons) {
	const arrayIconsType = [];

	// Uso un forEach per pushare nell'array arrayIconsType la proprietà type dell'oggetto in arrayIcons
	arrayIcons.forEach( (element) => {		

		if( !arrayIconsType.includes(element.type)) {
			// Creo una copia del vecchio oggetto
			const newObject = {
				...element
			};
				
			// Ricavo la proprietà type dal nuovo oggetto
			let IconsType = newObject.type;	

			arrayIconsType.push(IconsType) ;
		}				
									
	});	
	console.log(arrayIconsType);
	
}

