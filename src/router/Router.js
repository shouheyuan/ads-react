import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import BasicLayout from '../layout/Layout'
import { routerItems } from './config'
// loading页面
const Loading = () => (
    <>
        <div className='loadsvg'>
            <div>
                loading...
            </div>
        </div>
    </>
)


// 递归函数
const routerView = (routerItems) => {
    if (routerItems && routerItems.length) {
        return routerItems.map(({ path, Component, children, redirect }) => {
            return children && children.length ? (
                <Route path={path} key={path} element={<Suspense fallback={<Loading />}><Component /></Suspense>}>
                    {routerView(children)} // 递归遍历子路由
                    {redirect ?
                        (<Route path={path} element={<Navigate to={redirect} />}></Route>) :
                        (<Route path={path} element={<Navigate to={children[0].path} />}></Route>)
                    }
                </Route>
            ) : (
                <Route key={path} path={path} element={<Suspense fallback={<Loading />}><Component /></Suspense>}>
                </Route>
            )
        })
    }
}


function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    {routerView(routerItems)}
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}
export default Router