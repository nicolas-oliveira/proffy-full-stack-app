import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// console.log(`│\n│\n└──> READY`);

app.listen(3333);