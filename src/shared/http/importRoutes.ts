// import authRouter from '@modules/auth/infra/http/routes/auth.routes';
import countryRouter from '@modules/shared/country/infra/http/routes/Country.routes';
import stateRouter from '@modules/shared/state/infra/http/routes/State.routes';
import cityRouter from '@modules/shared/city/infra/http/routes/City.routes';
import addressRouter from '@modules/shared/address/infra/http/routes/Address.routes';
import religionRouter from '@modules/religion/infra/http/routes/Religion.routes';

const route = {
    countryRouter,
    stateRouter,
    cityRouter,
    addressRouter,
    religionRouter,
};

export default route;