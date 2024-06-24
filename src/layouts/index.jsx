    import { Navigate, Route, Routes } from 'react-router-dom'
    import PrivateLayout from './PrivateLayout'
    import PublicLayout from './PublicLayout'
    import publicRoutes from '../routes/publicRoutes'
    import privateRoutes from '../routes/privateRoutes'
    function AppLayout() {
        return (
            <Routes>
                <Route element={<PublicLayout />}>
                    {Object.values(publicRoutes).map(({ path, component: Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Route>

                <Route element={<PrivateLayout />}>
                    {Object.values(privateRoutes)
                        .map(({ path, component: Component, requiredLogin }) => (
                            <Route
                                key={path}
                                path={path}
                                element={requiredLogin ? <Component /> : <Navigate to="/login" />}
                            />  
                            ))}
                </Route>
                
            </Routes>
        )
}
    export default AppLayout