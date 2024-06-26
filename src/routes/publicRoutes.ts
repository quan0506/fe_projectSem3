import Login from '../pages/Login/LoginSignup'

const publicRoutes = {
    login: {
        path: '/login',
        component: Login,
        requiredLogin: false,
    },

}
export default publicRoutes;
