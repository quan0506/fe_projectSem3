import Home from '../pages/home/Home'
const privateRoutes = {
    home :{
        path: '/',
        component: Home,
        requiredLogin: true,
    },
};

export default privateRoutes;
