import express, { Router } from 'express';
import indego from './indego';

const router: Router = express.Router();

router.use('/', indego);

export default router;
