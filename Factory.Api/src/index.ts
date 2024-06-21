import express, { Request, Response } from 'express';
import cors from 'cors'
import { router } from './controllers/connect';

import settings from './settings.json'
import path from 'path';
import * as filesystem from 'fs'
import https from 'https'

const corsOptions: cors.CorsOptions = {
	origin: settings.corsOrigin,
}
var sslOptions = {
	key: filesystem.readFileSync(path.join(__dirname, settings.sslkey)),
	cert: filesystem.readFileSync(path.join(__dirname, settings.sslcert))
};
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
	const server = https.createServer(sslOptions, app).listen(port, function() {
		console.log(`Server running at https://localhost:${port}`);
	});
}
main().catch(error => console.log(error));