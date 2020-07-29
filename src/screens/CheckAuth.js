import { getJwt } from './index';

const checkJwt = () => {
    try {
        if (getJwt === null)
            return false;

    } catch (e) {
        return false;
    }

    return true;
}
export default checkJwt;