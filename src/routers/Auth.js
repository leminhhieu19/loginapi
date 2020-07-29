import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotScreen from '../screens/ForgotScreen';

export default[
    {
        exact: true,
        path: '/auths/login',
        component: LoginScreen,
    },
    {
        exact: true,
        path: '/auths/register',
        component: RegisterScreen,
    },
    {
        exact: true,
        path: '/auths/forgotpassword',
        component: ForgotScreen,
    }
]