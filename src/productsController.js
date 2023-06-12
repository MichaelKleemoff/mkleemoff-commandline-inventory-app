const { nanoid } = require('nanoid');
const chalk = require('chalk');

const inform = console.log;

function create(products, productName, price, isGlutenFree, inStock) {
	const product = {
		id: nanoid(4),
		name: productName,
		priceInCents: Number(price),
		isGlutenFree: JSON.parse(isGlutenFree),
		inStock: JSON.parse(inStock),
	};

	products.push(product);

	return products;
}

function index(products) {
	return products.map((product) => `${product.id} ${product.name}`).join('\n');
}

function show(products, productId) {
	const product = products.find((product) => product.id === productId);

	return `${chalk.yellowBright.bgCyan.bold.italic(
		'Product ID:'
	)} ${chalk.yellowBright(product.id)} ${chalk.magentaBright.bgCyan.bold.italic(
		'Product Name:'
	)} ${chalk.magentaBright(
		product.name
	)} ${chalk.greenBright.bgCyan.bold.italic(
		'Product Price:'
	)} ${chalk.greenBright('$')}${chalk.greenBright(
		(product.priceInCents / 100).toFixed(2)
	)} ${chalk.redBright.bgCyan.bold.italic('Gluten:')} ${chalk.redBright(
		product.isGlutenFree
	)} ${chalk.redBright.bgCyan.bold.italic('Stock:')} ${chalk.redBright(
		product.inStock
	)}`;
}

function edit(
	products,
	productId,
	updatedProductName,
	updatedProductPrice,
	updatedProductGluten,
	updatedProductStock
) {
	const index = products.findIndex((product) => product.id === productId);

	if (index > -1) {
		products[index].id = productId;
		products[index].name = updatedProductName
			? updatedProductName
			: products[index].name;
		products[index].priceInCents = updatedProductPrice
			? Number(updatedProductPrice)
			: products[index].priceInCents;
		products[index].isGlutenFree = updatedProductGluten
			? JSON.parse(updatedProductGluten)
			: products[index].isGlutenFree;
		products[index].inStock = updatedProductStock
			? JSON.parse(updatedProductStock)
			: products[index].inStock;
		inform('Bread successfully updated.');
		return products;
	} else {
		inform('Bread not found. No action taken.');
		return products;
	}
}

module.exports = {
	create,
	edit,
	index,
	show,
};
