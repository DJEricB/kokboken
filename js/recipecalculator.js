var servingsContainer = document.querySelector('.servings__container');
var servings = document.querySelector('.servings');
var ingredientsList = document.querySelector('.ingredients__list');

function createButton(sign, classname) {
	var button = document.createElement('i');
	button.setAttribute('class', 'fa-solid fa-circle-' + classname);
	button.classList.add('button--' + classname, 'button');
	return button;
}

servingsContainer.insertBefore(createButton('-', 'minus'), servings);
servingsContainer.appendChild(createButton('+', 'plus'));

var buttonMinus = servingsContainer.querySelector('.button--minus');
var buttonPlus = servingsContainer.querySelector('.button--plus');

var servingsBase = parseInt(servings.textContent);
var servingsMod;

buttonPlus.addEventListener('click', function () {
	servingsMod = servingsBase + 1;
	servings.textContent = servingsMod;
	updIngredients();
});

buttonMinus.addEventListener('click', function () {
	if (servingsBase > 1) {
		servingsMod = servingsBase - 1;
		servings.textContent = servingsMod;
		updIngredients();
	}
});

function updIngredients() {
	var ingredients = Array.from(
		document.querySelectorAll('.ingredients__listitem')
	);
	ingredients.forEach(function (ingredient) {
		var amount = ingredient.querySelector('.ingredients__amount');
		var amountBase = parseFloat(amount.textContent);
		console.log(amountBase);

		amount.textContent = (amountBase * servingsMod) / servingsBase;
	});
	servingsBase = servingsMod;
}
