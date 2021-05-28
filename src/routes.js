import Home from "./pages/Home.vue"
import Product from "./pages/Product.vue"
import CheckOut from "./pages/CheckOut.vue"

export default [
    {
        path:'/',
        component:Home,
        name:'home'
    },
    {
        path:'/product/:id',
        component:Product,
        name:'product',
        props:true
    }
    ,

    {
        path:'/checkout',
        component:CheckOut,
        name:'checkout',
        props:true
    }
]