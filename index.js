const { writeJSONFile, readJSONFile } = require('./src/helpers');
const { create, edit, index, show } = require('./src/productsController');
const chalk = require('chalk');

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

	inform(
		`Welcome to our 🌟${chalk
			.rgb(129, 132, 85)
			.bgYellowBright('SUPREME BREAD BAKERY')}🌟 App 🍞🥖🥯🥨 \n\n`
	);
	inform(
		`This is a custom-built inventory app for ${chalk.yellow.italic(
			'The Supreme Bread Bakery'
		)}. \n`
	);
	inform(`${chalk.bgBlue.bold('INSTRUCTIONS:')} \n`);

	inform(`👉 To add a bread to the inventory: \n`);
	inform(
		`${chalk.italic('Enter')} ${chalk.cyan.bgMagenta(
			'npm run create'
		)} ${chalk.italic('followed by')} ${chalk.cyan.bgMagenta.bold(
			'<PRODUCT NAME>'
		)} ${chalk.cyan.bgMagenta.bold(
			'<PRICE IN CENTS>'
		)} ${chalk.cyan.bgMagenta.bold(
			'<IS GLUTEN FREE>'
		)} ${chalk.cyan.bgMagenta.bold('<IS IN STOCK>')} ${chalk.italic(
			', where each description in angle brackets is replaced by the described input and all of them are separated by spaces'
		)}. \n`
	);

	inform(
		`👉 To show a list of all the bread IDs with their associated names: \n`
	);
	inform(
		`${chalk.italic('Enter')} ${chalk.cyan.bgMagenta('npm run index')}. \n`
	);

	inform(`👉 To show a specific bread with all its details using its ID: \n`);
	inform(
		`${chalk.italic('Enter')} ${chalk.cyan.bgMagenta(
			'npm run show'
		)} ${chalk.italic('followed by')} ${chalk.cyan.bgMagenta.bold(
			'<PRODUCT ID>'
		)} ${chalk.italic(
			', where <PRODUCT ID> in angle brackets is replaced by the inputted ID of the desired bread'
		)}. \n`
	);

	switch (action) {
		case 'create':
			updatedProducts = create(products, product, price, gluten, availability);
			writeToFile = true;
			break;
		case 'index':
			const productsView = index(products);
			inform(`${chalk.bgGreen.bold('OUTPUT:')} \n\n${productsView}\n`);
			break;
		case 'show':
			const productView = show(products, product);
			inform(`${chalk.bgGreen.bold('OUTPUT:')} \n\n${productView}\n`);
			break;
		case 'update':
			updatedProducts = edit(
				products,
				product,
				process.argv[4],
				process.argv[5],
				process.argv[6],
				process.argv[7]
			);
			writeToFile = true;
			break;
		default:
			inform(`${chalk.bgRed.bold('OUTPUT:')} \n\nThere was an error. \n`);
	}
	if (writeToFile) {
		writeJSONFile('data', 'products.json', updatedProducts);
	}
}

run();
