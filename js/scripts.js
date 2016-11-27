// plik scripts.js

var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = womensNames.concat(mensNames);
	console.log(allNames);

function addName(checkedArray, newArrayElement) {
	console.log('dodawanie do Tablicy imienia ' + newArrayElement);
	if (checkedArray.indexOf(newArrayElement) == -1) {
		checkedArray.push(newArrayElement);
		console.log('dodano do Tablicy imię ' + newArrayElement);
	}
	else {
		console.log('imię ' + newArrayElement + ' już istnieje w tablicy');
	}
	return checkedArray;
}

var newName = 'Marian';
allNames = addName(allNames, newName);
	console.log(allNames);

var newName2 = 'Asia';
allNames = addName(allNames, newName2);
	console.log(allNames);
