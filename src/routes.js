import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import Pedidos from './containers/Pedidos'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/pedidos" element={<Pedidos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
