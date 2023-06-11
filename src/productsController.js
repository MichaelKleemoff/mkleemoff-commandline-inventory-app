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

module.exports = {
	create,
	index,
	show,
};
