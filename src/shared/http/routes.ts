import { Router } from 'express';
import ApiResponse from '@shared/http/response/ApiResponse';
import cors from 'cors';
import options from '@config/cors';
import route from './importRoutes';

const router = Router();
router.use(cors(options.cors));

router.get('/', (_request, response) => {
	const output = ApiResponse.execute('back on');
	return response.json(output);
});
router.use('/country', route.countryRouter);
router.use('/state', route.stateRouter);
router.use('/city', route.cityRouter);
router.use('/address', route.addressRouter);
router.use('/religion', route.religionRouter);
router.use('/faithPoint', route.faithRouter);
router.use('/rating', route.ratingRouter);

export default router;
