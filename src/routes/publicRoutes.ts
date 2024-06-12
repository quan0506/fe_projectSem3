import Login from '../pages/login/Login'
const publicRoutes = {
    login: {
        path: '/login',
        component: Login,
        requiredLogin: false,
    },

}
export default publicRoutes;
