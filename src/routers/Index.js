
import Auth from "./Auth";
import Wbn from "./Wbn";
import ViewRouter from "./ViewRouter"; 
const routers = [
    {
        path: '',
        listRouter: Auth,
    },
    {
        path: '',
        listRouter: ViewRouter,
    },
    {
        path: '',
        listRouter: Wbn,
    },

];
const appRouters = [];
const renderListRouter = () =>
    routers.forEach((objectRouter) => {
        const tmp = objectRouter.listRouter.map(
            (router) => {
                return { parentPath: objectRouter.path, ...router };
            },
        );
        appRouters.push(...tmp);
    });
renderListRouter();

export default appRouters;