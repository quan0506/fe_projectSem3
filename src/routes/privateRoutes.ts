import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import AboutContact from '../pages/AboutContact';
import Cart from '../pages/Cart';

const privateRoutes = {
    home :{
        path: '/',
        component: Home,
        requiredLogin: true,
    },
    shop :{
        path: '/shop',
        component: Shop,
        requiredLogin: true,
    },
    product :{
        path: '/product',
        component: Product,
        requiredLogin: true,
    },
    aboutcontact :{
        path: '/aboutcontact',
        component: AboutContact,
        requiredLogin: true,
    },
    cart :{
        path: '/cart',
        component: Cart,
        requiredLogin: true,
    },
};

export default privateRoutes;
