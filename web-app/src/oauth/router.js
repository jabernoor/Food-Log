import express from 'express'

import googleRouter from "./google-router";

const router = express.Router();

router.use('/google',googleRouter);
export default router
