import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './controllers/connect';

async function main(): Promise<void> {
	const app = express();
	const port = process.env.PORT || 3000;

	app.use(bodyParser.urlencoded())
	app.use(bodyParser.json())
	app.use('/bid', router);

	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
}
main().catch(error => console.log(error));