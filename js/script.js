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


// Milestone 2
// Coloriamo le icone per tipo
const iconsColored = getIconsColored(icons, colors);

// Milestone 1
// Partendo dalla seguente struttura dati, 
// mostriamo in pagina tutte le icone disponibili come da layout.
const containerIcons = $('#container-icons');
printIcons(iconsColored, containerIcons); 


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const typesArrayIcons = getIconsType(icons);
const selectContainer = $('#type');
printOptions(typesArrayIcons, selectContainer);


selectContainer.change(function() {

	// Voglio che all'evento change mi mostri soltanto le icone che hanno il valore della propriet?? type
	// uguale al valore della option selezionata.
	let valueOfType = $(this).val();
	let arrayFiltered = filterArrayObjects(iconsColored, valueOfType);

	// Stampo le icone scelte
	printIcons(arrayFiltered, containerIcons); 
});



/* ------------ FUNCTIONS ------------ */

// Questa funzione stampa le icone in pagina a partire da un array di oggetti
//
// objectArray --> l'array di oggetti che rappresenta le icone 
// container --> L'oggetto JQuery che rappresenta l'elemento html sul quale voglio stampare le icone
//
// return: void (undefined)
function printIcons(objectArray, container) {

	// Svuoto il container prima di stampare tutto
	container.html('');
	
	// Devo scorrere l'array con un ciclo foEach e ricavare le informazioni per creare
	// il template literal
	objectArray.forEach( (element) => {
		const iconPrefix = element.prefix;
		const iconName = element.name;
		const iconFamily = element.family;
		const iconColor = element.color;

		// Creo template literal
		const templateIcon = `
			<div class="single-icon">
				<i class="${iconFamily} ${iconPrefix}${iconName}" style="color: ${iconColor}"></i>
				<div class="name">${iconName}</div>
			</div> 
		`;

		// Devo stampare il template literal in pagina
		container.append(templateIcon);
	});	
}


// Questa funzione crea un nuovo array aggiungendo all'array precedente la propriet?? color
// che cambia in funzione della propriet?? type dell'array precedente.
//
// arrayIcons --> l'array di oggetti che rappresenta le icone
// arrayColors --> Array di stringhe che rappresentano i colori css
//
// Return: Array di oggetti
function getIconsColored(arrayIcons, arrayColors) {
	// Ho bisogno di una array contenente stringhe dei tipi di icone, non ripetute.
	const arrayIconsType = getIconsType(arrayIcons);

	const newArrayObjects = arrayIcons.map( (element) => {
		const newObject = {
			...element
		};

		// Ricavo l'indice di arrayIconsType corrispondente al valore della propriet?? type dell'oggetto
		let indexOfTypes = arrayIconsType.indexOf(newObject.type);

		// Il valore della propriet?? color sar?? uguale all'elemento di arrayColors
		// che ha indice uguale a quello dell'elemento in arrayIconsType
		newObject.color = arrayColors[indexOfTypes];	
		return newObject;	
	});

	return newArrayObjects;
}

// Questa funzione ricava i tipi di icone da un array di oggetti e li mette in un array di stringhe, non ripetuti.
//
// arrayIcons --> l'array di oggetti che rappresenta le icone
//
// return: array di stringhe
function getIconsType(arrayIcons) {
	const arrayIconsType = [];

	// Uso un forEach per pushare nell'array arrayIconsType la propriet?? type dell'oggetto in arrayIcons
	arrayIcons.forEach( (element) => {		
		let iconsType = element.type;	
		if( !arrayIconsType.includes(iconsType)) {						
			arrayIconsType.push(iconsType) ;
		}				
									
	});	
	return arrayIconsType;
}


// Questa funzione stampa delle option in una select. I valori delle option sono uguali ai valori
// della propriet?? type dell'array di oggetti.
//
// typeValues --> Array di stringhe che rappresentano le propriet?? degli oggetti nell'array.
// select --> l'oggetto Jquery che rappresenta la select in cui devo stampare i typeValues.
//
// return: void (undefined)
function printOptions(typeValues, select) {
	
	typeValues.forEach( (element) => {
		const optionToPrint = `
			<option value="${element}">${element}</option>
		`;

		select.append(optionToPrint);
		// L'opzione All ?? di default nell'html
	});
}


// Questa funzione filtra un array di oggetti secondo un valore che gli viene richiesto
//
// arrayObjects --> l'array di oggetti che rappresenta le icone
// value --> il valore delle propriet?? che gli oggetti devono avere 
//
// return: un array di oggetti che hanno la propriet?? richiesta.
function filterArrayObjects(arrayObjects, value) {
	
	if (value == 'all') {
		return arrayObjects
	}

	const arrayObjectFiltered = arrayObjects.filter( (element) => {

		return element.type == value;
	});

	return arrayObjectFiltered;
}



