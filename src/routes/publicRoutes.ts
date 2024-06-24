import Login from '../pages/LoginSignup'

const publicRoutes = {
    login: {
        path: '/login',
        component: Login,
        requiredLogin: false,
    },

}
export default publicRoutes;
