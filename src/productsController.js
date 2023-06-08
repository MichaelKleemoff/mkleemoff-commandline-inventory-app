const { nanoid } = require('nanoid');

const inform = console.log;

function create(products, productName, price, inStock) {
	const product = {
		id: nanoid(4),
		name: productName,
		priceInCents: price,
		inStock: inStock,
	};
	products.push(product);
	return products;
}

module.exports = {
	create,
};
