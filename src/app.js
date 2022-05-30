import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from "./routes/user.routes.js";

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

app.use((req, response, next) => {
  const error = new Error(
    `${req.method} ${req.originalUrl} router doesn't exist`
  );
  error.status = 400;
  next(error);
});

app.use(
  (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_DEV !== 'production' ? err : {};
    res.send(res.locals.message);
  }
);

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')} server start`);
});