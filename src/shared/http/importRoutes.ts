// import authRouter from '@modules/auth/infra/http/routes/auth.routes';
import countryRouter from '@modules/shared/country/infra/http/routes/Country.routes';
import stateRouter from '@modules/shared/state/infra/http/routes/State.routes';
import cityRouter from '@modules/shared/city/infra/http/routes/City.routes';
import addressRouter from '@modules/shared/address/infra/http/routes/Address.routes';
import religionRouter from '@modules/religion/infra/http/routes/Religion.routes';
import faithRouter from '@modules/faith_point/infra/http/routes/FaithPoint.routes';
import ratingRouter from '@modules/rating/infra/http/routes/Rating.routes';

const route = {
    countryRouter,
    stateRouter,
    cityRouter,
    addressRouter,
    religionRouter,
    faithRouter,
    ratingRouter,
};

export default route;