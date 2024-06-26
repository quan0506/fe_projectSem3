import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop';
import Product from '../pages/product/Product';
import AboutContact from '../pages/AboutContact/AboutContact';
import Cart from '../pages/Cart/Cart';

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
