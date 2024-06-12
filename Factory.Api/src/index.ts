import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { router } from './controllers/connect';

const corsOptions: cors.CorsOptions = {
	origin: '*',
}
async function main(): Promise<void> {
	const app = express();
	const port = process.env.PORT || 3001;

	app.use(cors(corsOptions))
	app.use(bodyParser.urlencoded())
	app.use(bodyParser.json())

	app.use('/bid', router);
	app.listen(port, () => {
		console.log(`Server running at https://localhost:${port}`);
	});
}
main().catch(error => console.log(error));