const { writeJSONFile, readJSONFile } = require('./src/helpers');

const { create } = require('./src/productsController');

const inform = console.log;

function run() {
	const action = process.argv[2];
	const product = process.argv[3];
	const price = Number(process.argv[4]);
	const availability = Boolean(process.argv[5]);
	let products = readJSONFile('data', 'products.json');
	let writeToFile = false;
	let updatedProducts = [];

	console.log(products);

	switch (action) {
		case 'create':
			updatedProducts = create(products, product, price, availability);
			writeToFile = true;
			break;
		default:
			inform('There was an error.');
	}
	if (writeToFile) {
		writeJSONFile('data', 'products.json', updatedProducts);
	}
}

run();
