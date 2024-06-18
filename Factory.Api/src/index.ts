import express, { Request, Response } from 'express';
import cors from 'cors'
import { router } from './controllers/connect';

import settings from './settings.json'
import path from 'path';

const corsOptions: cors.CorsOptions = {
	origin: settings.corsOrigin,
}
async function main(): Promise<void> {
	const app = express();
	const port = process.env.PORT || settings.port;

	app.use(cors(corsOptions))
	app.use(express.static(path.join(__dirname, settings.public)));
	app.use(express.urlencoded({extended: false }));
	app.use(express.json());

	app.use('/bid', router);
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, settings.public, 'index.html'))
	})
	
	app.listen(port, () => {
		console.log(`Server running at https://localhost:${port}`);
	});
}
main().catch(error => console.log(error));