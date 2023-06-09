const { nanoid } = require('nanoid');

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

module.exports = {
	create,
};
