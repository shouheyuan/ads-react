import { lazy } from "react";

const page404 = () => (
    <>
        <div >
            <h1>
                404
            </h1>
        </div>
    </>
)




export const routerItems = [
    {
        path: '/',
        Component: lazy(() => import('@/layout/Layout')),
        redirect: '/Home',
        children: [
            {
                path: '/Home',
                Component: lazy(() => import('@/pages/Home/Home')),
                title: 'Home'
            },
            {
                path: '/Promotion',
                Component: lazy(() => import('@/pages/Promotion/Promotion')),
                title: 'Promotion'
            },
            {
                path: '/CreateAd',
                Component: lazy(() => import('@/pages/CreateAd/CreateAd')),
                title: 'CreateAd'
            }
            // ...其他路由
        ]
    },
    {
        path: '/Login',
        Component: lazy(() => import('@/pages/Login/Login')),
        title: 'Login'
    },
    {
        path: '*',
        Component: page404
    }
]