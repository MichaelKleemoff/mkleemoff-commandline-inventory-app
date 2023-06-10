const { writeJSONFile, readJSONFile } = require('./src/helpers');

const { create, index } = require('./src/productsController');

const inform = console.log;

function run() {
	const action = process.argv[2];
	const product = process.argv[3];
	const price = process.argv[4];
	const gluten = process.argv[5];
	const availability = process.argv[6];
	let products = readJSONFile('data', 'products.json');
	let writeToFile = false;
	let updatedProducts = [];

	inform('Welcome to our 🌟Supreme Bread Bakery🌟 App 🍞🥖🥯🥨 \n\n');

	switch (action) {
		case 'create':
			updatedProducts = create(products, product, price, gluten, availability);
			writeToFile = true;
			break;
		case 'index':
			const productsView = index(products);
			inform(productsView);
			break;
		default:
			inform('There was an error.');
	}
	if (writeToFile) {
		writeJSONFile('data', 'products.json', updatedProducts);
	}
	console.log(products);
}

run();
