// import authRouter from '@modules/auth/infra/http/routes/auth.routes';
import countryRouter from '@modules/shared/country/infra/http/routes/Country.routes';
import stateRouter from '@modules/shared/state/infra/http/routes/State.routes';
const route = {
    countryRouter,
    stateRouter
};

export default route;