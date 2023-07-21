import type { Request, Response } from 'express';

import express from 'express';
import pino from 'pino-http';

const app = express();
const httpLogger = pino();
const port = 8000;

app.use(httpLogger);

app.get('/', (req: Request, res: Response) => {
  req.log.info('request received');
  res.send('Hello, World!');
});

app.listen(port, () => {
  httpLogger.logger.info(`Example app listening on port ${port}`);
});
