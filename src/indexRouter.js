import express from 'express';
import ordersRouter from './orders/router';

const router = express.Router();

router.use('/orders',ordersRouter);

export default router;