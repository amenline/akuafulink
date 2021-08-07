import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

// body parser
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello world');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));