import cors from 'cors';
import express from 'express';
import { startApolloServer } from './apollo-server';

const app = express();

app.use(cors());
app.use(express.json());
startApolloServer(app);

app.listen(3333, () => {
  console.log('server listening on port 3333');
});
