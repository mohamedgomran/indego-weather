import express, {
  Router, Request, Response, NextFunction,
} from 'express';
import { validate } from '../../middlewares';
import { snapshotRequest, kioskSnapshotRequest } from '../../schemas';
import { fetchAndStore, getSnapshotByDate, getKioskSnapshot } from '../../controllers';
import { QueryAt, RouteKioskId } from '../../types';

export const router: Router = express.Router();

router.post('/indego-data-fetch-and-store-it-db', async (req: Request, res: Response, next: NextFunction) => {
  await fetchAndStore()
    .then(() => res.status(204).end())
    .catch((e) => next(e));
});

router.get(
  '/stations',
  validate(snapshotRequest),
  (req: Request & QueryAt, res: Response, next) => {
    const { at } = req.query;
    getSnapshotByDate(new Date(at))
      .then((response) => res.json(response))
      .catch(next);
  },
);

router.get(
  '/stations/:kioskId',
  validate(kioskSnapshotRequest),
  (req: Request & QueryAt & RouteKioskId, res: Response, next) => {
    const { at } = req.query;
    const { kioskId } = req.params;
    getKioskSnapshot(+kioskId, new Date(at))
      .then((response) => res.json(response))
      .catch(next);
  },
);

export default router;
