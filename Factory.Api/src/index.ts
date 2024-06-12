import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
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
	app.use(bodyParser.urlencoded())
	app.use(bodyParser.json())

	app.use('/assets', express.static(path.join(settings.public, 'assets')))
	app.use('/fonts', express.static(path.join(settings.public, 'fonts')))
	app.use('/bid', router);
	app.get('/static', (req, res) => {
		res.sendFile(path.join(settings.public, 'index.html'))
	})
	
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
}
main().catch(error => console.log(error));